export class Holding {
    symbol;
    shares;
    quote;
    costBasis;
    constructor(symbol, shares, quote, costBasis) {
        this.symbol = symbol;
        this.shares = shares;
        this.quote = quote;
        this.costBasis = costBasis;
    }
    static fromJson(json) {
        let jsonObject = JSON.parse(json);
        return new Holding(jsonObject.symbol, jsonObject.shares, jsonObject.quote, jsonObject.costBasis);
    }
}
