import { Router, Request, Response } from 'express';
import { getQuote } from './net/finnhub';

const router = Router();

router.get('/quote/:symbol', (req: Request, res: Response) => {
   // TODO: auth check
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

function isAlphabetical(str: string): boolean {
   return /^[a-zA-Z]+$/.test(str);
}

export default router;