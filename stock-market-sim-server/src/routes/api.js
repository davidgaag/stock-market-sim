import { Router, Request, Response } from 'express';
import { getQuote } from '../net/finnhub';
import { getAuthToken } from '../db/AuthTokenDao';
import { TweeterResponse } from 'stock-market-sim-shared/dist/model/net/Response';

const router = Router();

router.use((req, res, next) => {
   if (!req.body.authToken || req.body.alias) {
      res.status(401).json(new TweeterResponse(false, "Unauthorized"));
   }

   const authToken = req.body.authToken;
   const dbToken = getAuthToken(authToken);
   if (!dbToken) {
      res.status(401).json(new TweeterResponse(false, "Unauthorized"));
   } else if (dbToken.expiration < Date.now()) {
      res.status(401).json(new TweeterResponse(false, "Token expired"));
   } else if (dbToken.alias !== req.body.alias) {
      res.status(401).json(new TweeterResponse(false, "Unauthorized"));
   } else {
      next();
   }
});

router.get('/quote/:symbol', (req, res) => {
   const symbol = req.params.symbol;
   if (isAlphabetical(symbol)) {
      getQuote(symbol).then((quote) => {
         res.send(quote);
      }).catch((err) => {
         res.status(500).send
      });
   } else {
      res.status(400).send('Invalid symbol');
   }
});

function isAlphabetical(str) {
   return /^[a-zA-Z]+$/.test(str);
}

export default router;