import { AuthToken, Quote } from "stock-market-sim-shared";
import { Presenter, View } from "./Presenter";
import { SimulatorService } from "../model/service/SimulatorService";

export interface QuotePageView extends View {
   setQuote: (quote: Quote) => void;
}

export class QuotePagePresenter extends Presenter<QuotePageView> {
   private service: SimulatorService = new SimulatorService();

   public constructor(view: QuotePageView) {
      super(view);
   }

   public async getQuote(authToken: AuthToken, symbol: string) {
      const quote = await this.service.getQuote(authToken, symbol);
      this.view.setQuote(quote);
   }
}