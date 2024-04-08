"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const finnhub_1 = require("../net/finnhub");
const AuthTokenDao_1 = require("../db/AuthTokenDao");
const Response_1 = require("stock-market-sim-shared/dist/model/net/Response");
const router = (0, express_1.Router)();
router.use((req, res, next) => {
    if (!req.body.authToken || req.body.alias) {
        res.status(401).json(new Response_1.TweeterResponse(false, "Unauthorized"));
    }
    const authToken = req.body.authToken;
    const dbToken = (0, AuthTokenDao_1.getAuthToken)(authToken);
    if (!dbToken) {
        res.status(401).json(new Response_1.TweeterResponse(false, "Unauthorized"));
    }
    else if (dbToken.expiration < Date.now()) {
        res.status(401).json(new Response_1.TweeterResponse(false, "Token expired"));
    }
    else if (dbToken.alias !== req.body.alias) {
        res.status(401).json(new Response_1.TweeterResponse(false, "Unauthorized"));
    }
    else {
        next();
    }
});
router.get('/quote/:symbol', (req, res) => {
    const symbol = req.params.symbol;
    if (isAlphabetical(symbol)) {
        (0, finnhub_1.getQuote)(symbol).then((quote) => {
            res.send(quote);
        }).catch((err) => {
            res.status(500).send;
        });
    }
    else {
        res.status(400).send('Invalid symbol');
    }
});
function isAlphabetical(str) {
    return /^[a-zA-Z]+$/.test(str);
}
exports.default = router;
