import { Router } from 'express';
import { getUser, putUser } from '../db/UserDao.js';
import { putAuthToken, deleteAuthToken } from '../db/AuthTokenDao.js';
import { User } from '../../shared/model/domain/User.js';
import { AuthToken } from '../../shared/model/domain/AuthToken.js';
import { AuthResponse, AppResponse } from '../../shared/model/net/Response.js';
import bcrypt from 'bcryptjs';

const router = Router();

const invalidRequest = new AppResponse(false, 'Invalid request');
const usernameExists = new AppResponse(false, 'Username already exists');
const loginFailed = new AppResponse(false, 'Username or password is incorrect');

router.post('/login', async (req, res) => {
   if (!req.body.username || !req.body.password) {
      res.status(400).json(invalidRequest);
      return;
   }

   const username = req.body.username;
   const password = req.body.password;

   const userRow = await getUser(username);
   if (!userRow) {
      res.status(400).json(loginFailed);
      return;
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
      return;
   }

   const username = req.body.alias;
   const password = req.body.password;

   if (await getUser(username)) {
      res.status(409).json(usernameExists);
      return;
   }

   const userRow = await putUser(username, await hashPassword(password));
   const user = generateUser(username);
   const token = AuthToken.Generate();
   await putAuthToken(userRow.id, token.token, token.timestamp + 1000 * 60 * 60 * 24);
   res.status(201).json(generateAuthResponse(user, token));
});

router.post('/logout', async (req, res) => {
   if (!req.body.token) {
      res.status(400).json(invalidRequest);
      return;
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

export default router;