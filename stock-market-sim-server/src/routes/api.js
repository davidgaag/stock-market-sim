const { Router } = require('express');
const { getQuote } = require('../net/finnhub.js');
const { getAuthToken } = require('../db/AuthTokenDao.js');

const router = Router();

router.use((req, res, next) => {
   console.log("API request: " + req.url + " " + JSON.stringify(req.body));

   if (!req.body.authToken || !req.body.alias) {
      res.status(401).json('Unauthorized');
      return;
   }

   const authToken = req.body.authToken;
   const dbToken = getAuthToken(authToken);
   if (!dbToken) {
      res.status(401).json('Unauthorized');
   } else if (dbToken.expiration < Date.now()) {
      res.status(401).json('Token expired');
   } else if (dbToken.alias !== req.body.alias) {
      res.status(401).json('Unauthorized');
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

module.exports = router;