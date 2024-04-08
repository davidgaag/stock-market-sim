"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuote = void 0;
const finnhub_1 = __importDefault(require("finnhub"));
const api_key = finnhub_1.default.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.FINNHUB_API_KEY;
const client = new finnhub_1.default.DefaultApi();
function getQuote(symbol) {
    return new Promise((resolve, reject) => {
        client.quote(symbol, (error, data, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(data);
            }
        });
    });
}
exports.getQuote = getQuote;
