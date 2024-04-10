import { Router } from 'express';
import { getQuote } from '../net/finnhub.js';
import { getAuthToken, getDynamicAssetData, putDynamicAssetData } from '../db/redis/Redis.js';
import { invalidRequest, serverError, unauthorized } from '../app.js';
import { Quote } from '../../shared/model/domain/Quote.js';
import { PortfolioResponse, QuoteResponse } from '../../shared/model/net/Response.js';
import { Holding } from '../../shared/model/domain/Holding.js';
import { buyTransaction, getHoldings, sellTransaction } from '../db/postgres/SimulatorDao.js';

const router = Router();

// Middleware to check auth token validity
router.use(async (req, res, next) => {
   if (!req.body.authToken) {
      res.status(401).json(unauthorized);
      return;
   }

   const authToken = req.body.authToken._token; // TODO: underscore?
   const userId = await getAuthToken(authToken);
   if (!userId) {
      res.status(401).json(unauthorized);
   } else {
      req.userId = userId;
      next();
   }
});

router.post('/portfolio', async (req, res) => {
   const resRows = await getHoldings(req.userId);

   const holdings = await Promise.all(resRows.map(async row => {
      if (row.symbol === '$CASH$') {
         return new Holding(row.symbol, row.quantity, null, row.purchase_price);
      }
      const quoteData = normalizeQuoteData(await getQuote(row.symbol));
      const quote = new Quote(
         row.symbol,
         quoteData.currentPrice,
         quoteData.change,
         quoteData.percentChange,
         quoteData.dailyHigh,
         quoteData.dailyLow,
         quoteData.openPrice,
         quoteData.previousClose
      );
      return new Holding(row.symbol, row.quantity, quote, row.purchase_price);
   }));

   res.status(200).json(new PortfolioResponse(true, holdings, 'Success'));
});

router.post('/trade', async (req, res) => {
   if (!req.body.type || !req.body.symbol || !req.body.shares) {
      res.status(400).json(invalidRequest);
      return;
   }

   if (req.body.type !== 'buy' && req.body.type !== 'sell') {
      res.status(400).json(invalidRequest);
      return;
   }

   if (!parseInt(req.body.shares)) {
      res.status(400).json(invalidRequest);
      return;
   }

   const type = req.body.type;
   const symbol = req.body.symbol;
   const shares = parseInt(req.body.shares);
   try {
      if (type === 'buy') {
         await buyTransaction(req.userId, symbol, shares);
      } else {
         await sellTransaction(req.userId, symbol, shares);
      }
      res.status(200).json({ success: true });
   } catch (error) {
      console.error(error);
      if (error.message === 'Insufficient funds' ||
         error.message === 'No shares to sell' ||
         error.message === 'Insufficient shares' ||
         error.message === 'Invalid symbol') {
         res.status(400).json(invalidRequest);
      } else {
         console.error(error);
         res.status(500).json(serverError);
      }
   }
});

router.post('/quote/:symbol', async (req, res) => {
   const symbol = req.params.symbol.toUpperCase();
   if (isValidTicker(symbol)) {
      try {
         let quoteData = await getDynamicAssetData(symbol);

         if (Object.keys(quoteData).length === 0) {
            const data = await getQuote(symbol);
            quoteData = normalizeQuoteData(data);
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
         res.status(200).json(new QuoteResponse(true, quote, 'Success'));
      } catch (error) {
         console.error(error);
         res.status(500).json(serverError);
      }
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