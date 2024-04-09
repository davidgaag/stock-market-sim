export class Holding {
  symbol;
  shares;
  value;
  costBasis;
  dayChange;
  constructor(symbol, shares, value, costBasis, dayChange) {
    this.symbol = symbol;
    this.shares = shares;
    this.value = value;
    this.costBasis = costBasis;
    this.dayChange = dayChange;
  }
}