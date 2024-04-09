import { AuthToken, AuthTokenRequest } from "stock-market-sim-shared";
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
}