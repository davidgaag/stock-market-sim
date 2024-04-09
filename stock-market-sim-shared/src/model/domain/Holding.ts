export class Holding {
   public symbol: string;
   public shares: number;
   public value: number;
   public costBasis: number;
   public dayChange: number;
   public yesterdayValue: number | null;

   public constructor(
      symbol: string,
      shares: number,
      value: number,
      costBasis: number,
      dayChange: number,
      yesterdayValue: number | null,
   ) {
      this.symbol = symbol;
      this.shares = shares;
      this.value = value;
      this.costBasis = costBasis;
      this.dayChange = dayChange;
      this.yesterdayValue = yesterdayValue;
   }

   static fromJson(json: string): Holding {
      interface HoldingJson {
         symbol: string;
         shares: number;
         value: number;
         costBasis: number;
         dayChange: number;
         yesterdayValue: number | null;
      }

      const jsonObject: HoldingJson = JSON.parse(json) as HoldingJson;

      return new Holding(
         jsonObject.symbol,
         jsonObject.shares,
         jsonObject.value,
         jsonObject.costBasis,
         jsonObject.dayChange,
         jsonObject.yesterdayValue || null
      );
   }
}