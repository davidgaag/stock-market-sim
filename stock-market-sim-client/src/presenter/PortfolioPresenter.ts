import { AuthToken, Holding } from "stock-market-sim-shared";
import { Presenter, View } from "./Presenter";
import { SimulatorService } from "../model/service/SimulatorService";

export interface PortfolioView extends View {
   setHoldings: (holdings: Holding[]) => void;
   setCurrValue: (value: number) => void;
   setMarketValue: (value: number) => void;
   setCashValue: (value: number) => void;
   setDayChange: (value: number) => void;
}

export class PortfolioPresenter extends Presenter<PortfolioView> {
   private service: SimulatorService = new SimulatorService();

   public constructor(view: PortfolioView) {
      super(view);
   }

   public async getPortfolio(authToken: AuthToken) {
      const holdings = await this.service.getHoldings(authToken);

      let marketValue = 0;
      let dayChange = 0;
      let cashValue = 0;
      for (const holding of holdings) {
         if (holding.symbol === "$CASH$") {
            cashValue = holding.value;
         } else {
            marketValue += holding.value;
            dayChange += holding.dayChange;
         }
      }

      this.view.setHoldings(holdings);
      this.view.setCurrValue(marketValue + cashValue);
      this.view.setMarketValue(marketValue);
      this.view.setCashValue(cashValue);
      this.view.setDayChange(dayChange);
   }
}