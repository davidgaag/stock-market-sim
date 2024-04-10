import { Quote } from "./Quote.js";
export declare class Holding {
    symbol: string;
    shares: number;
    quote: Quote;
    costBasis: number;
    constructor(symbol: string, shares: number, quote: Quote, costBasis: number);
    static fromJson(json: string): Holding;
}
