import { AuthResponse, RegisterRequest, LoginRequest, LogOutRequest } from "stock-market-sim-shared";
import { ClientCommunicator } from "./ClientCommunicator";

export class ServerFacade {

   private SERVER_URL = "http://localhost:"; // TODO: Set this value.

   private clientCommunicator = new ClientCommunicator(this.SERVER_URL);

   async login(request: LoginRequest): Promise<AuthResponse> {
      const endpoint = "/service/login";
      const response: JSON = await this.clientCommunicator.doPost<LoginRequest>(request, endpoint);

      return AuthResponse.fromJson(response);
   }

   async register(request: RegisterRequest): Promise<AuthResponse> {
      const endpoint = "/service/register";
      const response: JSON = await this.clientCommunicator.doPost<RegisterRequest>(request, endpoint);

      return AuthResponse.fromJson(response);
   }

   async logout(request: LogOutRequest): Promise<void> {
      const endpoint = "/service/logout";
      await this.clientCommunicator.doPost<LogOutRequest>(request, endpoint);
   }
}