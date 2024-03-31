"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("./api"));
const path_1 = __importDefault(require("path"));
const express = require('express');
const app = express();
const port = process.env.PORT || 80;
app.use('/', api_1.default);
app.use(express.static(path_1.default.join(__dirname, '../public')));
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/index.html'));
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
