export class Holding {
    symbol;
    shares;
    value;
    costBasis;
    dayChange;
    yesterdayValue;
    constructor(symbol, shares, value, costBasis, dayChange, yesterdayValue) {
        this.symbol = symbol;
        this.shares = shares;
        this.value = value;
        this.costBasis = costBasis;
        this.dayChange = dayChange;
        this.yesterdayValue = yesterdayValue;
    }
    static fromJson(json) {
        const jsonObject = JSON.parse(json);
        return new Holding(jsonObject.symbol, jsonObject.shares, jsonObject.value, jsonObject.costBasis, jsonObject.dayChange, jsonObject.yesterdayValue || null);
    }
}
