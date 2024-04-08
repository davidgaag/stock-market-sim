import { Request, Response, Router } from 'express';
import { getUser, putUser } from '../db/UserDao';
import { putAuthToken } from '../db/AuthTokenDao';
import { AuthResponse, AuthToken, User } from 'stock-market-sim-shared';
import bcrypt from 'bcryptjs';
import { TweeterResponse } from 'stock-market-sim-shared/dist/model/net/Response';

const router = Router();

router.get('/auth/login', async (req, res) => {
   if (!req.body.username || !req.body.password) {
      res.status(400).send(new TweeterResponse(false, "Invalid request"));
   }

   const username = req.body.username;
   const password = req.body.password;

   const userRow = await getUser(username);
   if (!userRow) {
      res.status(400).json(new TweeterResponse(false, "Username or password is incorrect"));
   }

   const user = new User("First", "Last", userRow.id, "URL");

   if (await comparePasswords(password, userRow.password)) {
      const token = AuthToken.Generate();
      const response = new AuthResponse(true, user, token, "Login successful");
      await putAuthToken(userRow.id, token.token, token.timestamp + 1000 * 60 * 60 * 24);
      res.status(200).json(response);
   } else {
      res.status(400).json(new TweeterResponse(false, "Username or password is incorrect"));
   }
});

router.get('/auth/register', async (req, res) => {
   if (!req.body.alias || !req.body.password) {
      res.status(400).json(new TweeterResponse(false, "Invalid request"));
   }

   const username = req.body.alias;
   const password = req.body.password;

   if (await getUser(username)) {
      res.status(409).send(new TweeterResponse(false, "Username already exists"));
   }

   await putUser(username, await hashPassword(password));
   const user = new User("First", "Last", username, "URL");
   const token = AuthToken.Generate();
   await putAuthToken(username, token.token, token.timestamp + 1000 * 60 * 60 * 24);
   res.status(201).send(new AuthResponse(true, user, token, "Registration successful"));
});

router.get('/auth/logout', async (req, res) => {
   // TODO: Implement logout
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

export default router;