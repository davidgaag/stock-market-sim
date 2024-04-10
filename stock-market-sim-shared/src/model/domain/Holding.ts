import { Quote } from "./Quote.js";

export class Holding {
   public symbol: string;
   public shares: number;
   public quote: Quote;
   public costBasis: number;

   public constructor(
      symbol: string,
      shares: number,
      quote: Quote,
      costBasis: number
   ) {
      this.symbol = symbol;
      this.shares = shares;
      this.quote = quote;
      this.costBasis = costBasis;
   }

   static fromJson(json: string): Holding {
      let jsonObject: { symbol: string, shares: number, quote: Quote, costBasis: number } = JSON.parse(json);
      return new Holding(
         jsonObject.symbol,
         jsonObject.shares,
         jsonObject.quote,
         jsonObject.costBasis
      );
   }
}