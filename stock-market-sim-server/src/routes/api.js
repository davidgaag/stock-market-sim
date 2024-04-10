import { Router } from 'express';
import { getQuote } from '../net/finnhub.js';
import { getAuthToken, getDynamicAssetData, putDynamicAssetData } from '../db/redis/Redis.js';
import { invalidRequest, serverError, unauthorized } from '../app.js';
import { Quote } from '../../shared/model/domain/Quote.js';
import { QuoteResponse } from '../../shared/model/net/Response.js';

const router = Router();

// Middleware to check auth token validity
router.use((req, res, next) => {
   console.log("API request: " + req.url + " " + JSON.stringify(req.body));

   if (!req.body.authToken) {
      res.status(401).json(unauthorized);
      return;
   }

   const authToken = req.body.authToken._token; // TODO: underscore?
   const userId = getAuthToken(authToken);
   if (!userId) {
      res.status(401).json(unauthorized);
   } else {
      req.userId = userId;
      next();
   }
});

router.post('/portfolio', (req, res) => {
   // TODO: Implement this
   res.status(501).send('Not implemented');
});

router.post('/trade', (req, res) => {
   // TODO: Implement this
   res.status(501).send('Not implemented');
});

router.post('/quote/:symbol', async (req, res) => {
   const symbol = req.params.symbol.toUpperCase();
   if (isValidTicker(symbol)) {
      let quoteData = await getDynamicAssetData(symbol);
      console.log("Quote data redis: ", JSON.stringify(quoteData));

      if (Object.keys(quoteData).length === 0) {
         quoteData = await new Promise((resolve, reject) => {
            getQuote(symbol, (error, data) => {
               if (error) {
                  reject(error);
                  return;
               }

               const normalizedQuote = normalizeQuoteData(data);
               console.log("Quote data API: ", JSON.stringify(normalizedQuote));
               resolve(normalizedQuote);
            });
         }).catch((error) => {
            res.status(500).json(serverError);
            return;
         });
         putDynamicAssetData(symbol, quoteData);
      }

      const quote = new Quote(
         symbol,
         quoteData.currentPrice,
         quoteData.change,
         quoteData.percentChange,
         quoteData.dailyHigh,
         quoteData.dailyLow,
         quoteData.openPrice,
         quoteData.previousClose
      );
      console.log("Quote response: ", JSON.stringify(quote))
      res.status(200).json(new QuoteResponse(true, quote, 'Success'));
   } else {
      res.status(400).json(invalidRequest);
   }
});

function isValidTicker(str) {
   return /^[A-Z]{1,5}([/.][A-Z]{2})?$/.test(str);
}

function normalizeQuoteData(data) {
   // Check which fields exist in the data object and map them to the standard field names
   return {
      currentPrice: data.c || data.currentPrice,
      change: data.d || data.change,
      percentChange: data.dp || data.percentChange,
      dailyHigh: data.h || data.dailyHigh,
      dailyLow: data.l || data.dailyLow,
      openPrice: data.o || data.openPrice,
      previousClose: data.pc || data.previousClose
   };
}

export default router;