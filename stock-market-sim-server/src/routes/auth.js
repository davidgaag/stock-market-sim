const { Router } = require('express');
const { getUser, putUser } = require('../db/UserDao.js');
const { putAuthToken, deleteAuthToken } = require('../db/AuthTokenDao.js');
const User = require('../../shared/model/domain/User.js').User;
const AuthToken = require('../../shared/model/domain/AuthToken.js').AuthToken;
const AuthResponse = require('../../shared/model/net/Response.js').AuthResponse;
const AppResponse = require('../../shared/model/net/Response.js').AppResponse;
const bcrypt = require('bcryptjs');

const router = Router();
const invalidRequest = new AppResponse(false, 'Invalid request');
const usernameExists = new AppResponse(false, 'Username already exists');
const loginFailed = new AppResponse(false, 'Username or password is incorrect');

router.post('/login', async (req, res) => {
   if (!req.body.username || !req.body.password) {
      res.status(400).json(invalidRequest);
   }

   const username = req.body.username;
   const password = req.body.password;

   const userRow = await getUser(username);
   if (!userRow) {
      res.status(400).json(loginFailed);
   }

   if (await comparePasswords(password, userRow.password)) {
      const user = generateUser(username);
      const token = AuthToken.Generate();
      await putAuthToken(userRow.id, token.token, token.timestamp + 1000 * 60 * 60 * 24);
      res.status(200).json(new AuthResponse(true, user, token, 'Login successful'));
   } else {
      res.status(400).json(loginFailed);
   }
});

router.post('/register', async (req, res) => {
   if (!req.body.alias || !req.body.password) {
      res.status(400).json(invalidRequest);
   }

   const username = req.body.alias;
   const password = req.body.password;

   if (await getUser(username)) {
      res.status(409).json(usernameExists);
   }

   await putUser(username, await hashPassword(password));
   const user = generateUser(username);
   const token = AuthToken.Generate();
   await putAuthToken(username, token.token, token.timestamp + 1000 * 60 * 60 * 24);
   res.status(201).json(generateAuthResponse(user, token));
});

router.post('/logout', async (req, res) => {
   if (!req.body.token) {
      res.status(400).json(invalidRequest);
   }

   const token = req.body.token;
   await deleteAuthToken(token);
   res.status(200).json(new AppResponse(true, 'Logout successful'));
});

async function hashPassword(password) {
   const saltRounds = 10;
   return await bcrypt
      .genSalt(saltRounds)
      .then(salt => {
         return bcrypt.hash(password, salt);
      });
}

async function comparePasswords(password, hashedPassword) {
   return await bcrypt.compare(password, hashedPassword);
}

function generateUser(username) {
   return new User('First', 'Last', username, 'https://www.gravatar.com/avatar/');
}

function generateAuthResponse(user, token) {
   return new AuthResponse(true, user, token, 'Login successful');
}

module.exports = router;