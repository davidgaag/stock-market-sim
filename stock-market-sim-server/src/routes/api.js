import { Router } from 'express';
import { getQuote } from '../net/finnhub.js';
import { getAuthToken } from '../db/AuthTokenDao.js';
import { invalidRequest, serverError } from '../app.js';
import { Quote } from '../../shared/model/domain/Quote.js';
import { QuoteResponse } from '../../shared/model/net/Response.js';

const router = Router();

// Middleware to check auth token validity
router.use((req, res, next) => {
   console.log("API request: " + req.url + " " + JSON.stringify(req.body));

   if (!req.body.authToken) {
      res.status(401).json('Unauthorized');
      return;
   }

   const authToken = req.body.authToken;
   const dbToken = getAuthToken(authToken);
   if (!dbToken) {
      res.status(401).json('Unauthorized');
   } else if (dbToken.expiration < Date.now()) {
      res.status(401).json('Token expired');
   } else {
      next();
   }
});

router.post('/portfolio', (req, res) => {
   // TODO: Implement this
   res.status(501).send('Not implemented');
});

router.post('/quote/:symbol', (req, res) => {
   const symbol = req.params.symbol;
   if (isAlphabetical(symbol)) {
      getQuote(symbol, (error, quoteData) => {
         if (error) {
            res.status(500).json(serverError);
            return;
         }

         const quote = new Quote(
            symbol,
            quoteData.c,
            quoteData.d,
            quoteData.dp,
            quoteData.h,
            quoteData.l,
            quoteData.o,
            quoteData.pc
         );
         res.status(200).json(new QuoteResponse(true, quote, 'Success'));
      });
   } else {
      res.status(400).json(invalidRequest);
   }
});

function isAlphabetical(str) {
   return /^[a-zA-Z]+$/.test(str);
}

export default router;