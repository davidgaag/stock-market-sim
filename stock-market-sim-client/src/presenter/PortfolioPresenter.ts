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
      let holdings = await this.service.getHoldings(authToken);

      let marketValue = 0;
      let dayChange = 0;
      let cashValue = 0;
      let indexOfCash = -1;
      for (let i = 0; i < holdings.length; i++) {
         const holding = holdings[i];
         if (holding.symbol === "$CASH$") {
            cashValue = holding.value;
            indexOfCash = i;
         } else {
            marketValue += holding.value;
            dayChange += holding.dayChange;
         }
      }

      if (indexOfCash !== -1) {
         holdings = holdings.slice(0, indexOfCash).concat(holdings.slice(indexOfCash + 1));
      }

      this.view.setHoldings(holdings);
      this.view.setCurrValue(marketValue + cashValue);
      this.view.setMarketValue(marketValue);
      this.view.setCashValue(cashValue);
      this.view.setDayChange(dayChange);
   }
}