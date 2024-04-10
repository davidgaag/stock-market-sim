import { AuthToken, AuthTokenRequest, TradeRequest } from "stock-market-sim-shared";
import { ServerFacade } from "../net/ServerFacade";

export class SimulatorService {
   private serverFacade = new ServerFacade();

   public async getHoldings(authToken: AuthToken) {
      const response = await this.serverFacade.getHoldings(new AuthTokenRequest(authToken));
      return response.holdings;
   }

   public async getQuote(authToken: AuthToken, symbol: string) {
      const response = await this.serverFacade.getQuote(new AuthTokenRequest(authToken), symbol);
      return response.quote;
   }

   public async trade(authToken: AuthToken, type: string, symbol: string, shares: number) {
      const response = await this.serverFacade.trade(new TradeRequest(authToken, type, symbol, shares));
      return response.message!;
   }
}