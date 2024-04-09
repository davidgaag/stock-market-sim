export declare class Quote {
    symbol: string;
    currentPrice: number;
    change: number;
    percentChange: number;
    dailyHigh: number;
    dailyLow: number;
    openPrice: number;
    previousClose: number;
    constructor(symbol: string, currentPrice: number, change: number, percentChange: number, dailyHigh: number, dailyLow: number, openPrice: number, previousClose: number);
    static fromJson(json: string): Quote;
}
