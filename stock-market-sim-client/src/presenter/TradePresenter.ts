import { AuthToken } from "stock-market-sim-shared";
import { SimulatorService } from "../model/service/SimulatorService";
import { MessageView, Presenter } from "./Presenter";

export enum TradeType {
   Buy = "buy",
   Sell = "sell"
}

export interface TradeView extends MessageView {

}

export class TradePresenter extends Presenter<TradeView> {
   private service: SimulatorService = new SimulatorService();

   public constructor(view: TradeView) {
      super(view);
   }

   public async trade(authToken: AuthToken, type: string, symbol: string, shares: number) {
      const message = await this.service.trade(authToken, type, symbol, shares);
      this.view.displayInfoMessage(message!, 5000);
   }
}