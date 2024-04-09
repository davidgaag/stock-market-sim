export class Quote {
   public symbol: string;
   public currentPrice: number;
   public change: number;
   public percentChange: number;
   public dailyHigh: number;
   public dailyLow: number;
   public openPrice: number;
   public previousClose: number;

   public constructor(
      symbol: string,
      currentPrice: number,
      change: number,
      percentChange: number,
      dailyHigh: number,
      dailyLow: number,
      openPrice: number,
      previousClose: number
   ) {
      this.symbol = symbol;
      this.currentPrice = currentPrice;
      this.change = change;
      this.percentChange = percentChange;
      this.dailyHigh = dailyHigh;
      this.dailyLow = dailyLow;
      this.openPrice = openPrice;
      this.previousClose = previousClose;
   }

   static fromJson(json: string): Quote {
      interface QuoteJson {
         symbol: string;
         currentPrice: number;
         change: number;
         percentChange: number;
         dailyHigh: number;
         dailyLow: number;
         openPrice: number;
         previousClose: number;
      }

      const jsonObject: QuoteJson = JSON.parse(json) as QuoteJson;

      return new Quote(
         jsonObject.symbol,
         jsonObject.currentPrice,
         jsonObject.change,
         jsonObject.percentChange,
         jsonObject.dailyHigh,
         jsonObject.dailyLow,
         jsonObject.openPrice,
         jsonObject.previousClose
      );
   }
}