"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/service/login', (req, res) => {
    res.send('Login endpoint');
});
router.get('/service/register', (req, res) => {
    res.send('Register endpoint');
});
router.get('/service/logout', (req, res) => {
    res.send('Logout endpoint');
});
exports.default = router;
