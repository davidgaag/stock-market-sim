export class Quote {
    symbol;
    currentPrice;
    change;
    percentChange;
    dailyHigh;
    dailyLow;
    openPrice;
    previousClose;
    constructor(symbol, currentPrice, change, percentChange, dailyHigh, dailyLow, openPrice, previousClose) {
        this.symbol = symbol;
        this.currentPrice = currentPrice;
        this.change = change;
        this.percentChange = percentChange;
        this.dailyHigh = dailyHigh;
        this.dailyLow = dailyLow;
        this.openPrice = openPrice;
        this.previousClose = previousClose;
    }
    static fromJson(json) {
        const jsonObject = JSON.parse(json);
        return new Quote(jsonObject.symbol, jsonObject.currentPrice, jsonObject.change, jsonObject.percentChange, jsonObject.dailyHigh, jsonObject.dailyLow, jsonObject.openPrice, jsonObject.previousClose);
    }
}
