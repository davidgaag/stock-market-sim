import { AuthToken, LoginRequest, RegisterRequest, User } from "stock-market-sim-shared";
import { ServerFacade } from "../net/ServerFacade";
import { AuthTokenRequest } from "stock-market-sim-shared/dist/model/net/Request";

export class UserService {
   private serverFacade = new ServerFacade();

   public async login(
      alias: string,
      password: string
   ): Promise<[User, AuthToken]> {
      const response = await this.serverFacade.login(new LoginRequest(alias, password));
      return [response.user, response.token];
   }

   public async register(
      firstName: string,
      lastName: string,
      alias: string,
      password: string,
   ): Promise<[User, AuthToken]> {
      const response = await this.serverFacade.register(new RegisterRequest(
         firstName,
         lastName,
         alias,
         password,
      ));

      return [response.user, response.token];
   }

   public async logout(authToken: AuthToken): Promise<void> {
      await this.serverFacade.logout(new AuthTokenRequest(authToken));
   }
}