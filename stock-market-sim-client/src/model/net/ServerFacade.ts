import { AuthResponse, RegisterRequest, LoginRequest, PortfolioResponse, QuoteResponse } from "stock-market-sim-shared";
import { ClientCommunicator } from "./ClientCommunicator";
import { AuthTokenRequest } from "stock-market-sim-shared";

export class ServerFacade {

   private SERVER_URL = "https://stock-market-sim-bef54ae5d38a.herokuapp.com";

   private clientCommunicator = new ClientCommunicator(this.SERVER_URL);

   async login(request: LoginRequest): Promise<AuthResponse> {
      const endpoint = "/auth/login";
      const response: JSON = await this.clientCommunicator.doPost<LoginRequest>(request, endpoint);

      return AuthResponse.fromJson(response);
   }

   async register(request: RegisterRequest): Promise<AuthResponse> {
      const endpoint = "/auth/register";
      const response: JSON = await this.clientCommunicator.doPost<RegisterRequest>(request, endpoint);

      return AuthResponse.fromJson(response);
   }

   async logout(request: AuthTokenRequest): Promise<void> {
      const endpoint = "/auth/logout";
      await this.clientCommunicator.doPost<AuthTokenRequest>(request, endpoint);
   }

   async getHoldings(request: AuthTokenRequest): Promise<PortfolioResponse> {
      const endpoint = "/api/portfolio";
      const response: JSON = await this.clientCommunicator.doPost<AuthTokenRequest>(request, endpoint);

      return PortfolioResponse.fromJson(response);
   }

   async getQuote(request: AuthTokenRequest, symbol: string): Promise<QuoteResponse> {
      const endpoint = `/api/quote/${symbol}`;
      const response: JSON = await this.clientCommunicator.doPost<AuthTokenRequest>(request, endpoint);

      return QuoteResponse.fromJson(response);
   }
}