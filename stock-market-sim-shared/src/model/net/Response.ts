import { AuthToken } from "../domain/AuthToken.js";
import { User } from "../domain/User.js";
import { Holding } from "../domain/Holding.js";
import { Quote } from "../domain/Quote.js";

export class AppResponse {
   private _success: boolean;
   private _message: string | null;

   constructor(success: boolean, message: string | null = null) {
      this._success = success;
      this._message = message;
   }

   get success() {
      return this._success;
   }

   get message() {
      return this._message;
   }

   static fromJson(json: JSON): AppResponse {
      interface ResponseJson {
         _success: boolean;
         _message: string;
      }

      const jsonObject: ResponseJson = json as unknown as ResponseJson;

      return new AppResponse(
         jsonObject._success,
         jsonObject._message
      );
   }
}

interface ResponseJson {
   _success: boolean;
   _message: string;
}

export class AuthResponse extends AppResponse {
   private _user: User;
   private _token: AuthToken;

   constructor(success: boolean, user: User, token: AuthToken, message: string | null) {
      super(success, message);
      this._user = user;
      this._token = token;
   }

   get user() {
      return this._user;
   }

   get token() {
      return this._token;
   }

   static fromJson(json: JSON): AuthResponse {
      interface AuthenticateResponseJson extends ResponseJson {
         _user: JSON;
         _token: JSON;
      }

      const jsonObject: AuthenticateResponseJson =
         json as unknown as AuthenticateResponseJson;
      const deserializedUser = User.fromJson(JSON.stringify(jsonObject._user));

      if (deserializedUser === null) {
         throw new Error(
            "AuthResponse, could not deserialize user with json:\n" +
            JSON.stringify(jsonObject._user)
         );
      }

      const deserializedToken = AuthToken.fromJson(
         JSON.stringify(jsonObject._token)
      );

      if (deserializedToken === null) {
         throw new Error(
            "AuthResponse, could not deserialize token with json:\n" +
            JSON.stringify(jsonObject._token)
         );
      }

      return new AuthResponse(
         jsonObject._success,
         deserializedUser,
         deserializedToken,
         jsonObject._message
      );
   }
}

export class PortfolioResponse extends AppResponse {
   private _holdings: Holding[];

   constructor(
      success: boolean,
      holdings: Holding[],
      message: string | null
   ) {
      super(success, message);
      this._holdings = holdings;
   }

   get holdings() {
      return this._holdings;
   }

   static fromJson(json: JSON): PortfolioResponse {
      interface PortfolioResponseJson extends ResponseJson {
         _holdings: JSON[];
      }

      const jsonObject: PortfolioResponseJson =
         json as unknown as PortfolioResponseJson;

      const holdings: Holding[] = jsonObject._holdings.map((holdingJson) => {
         return Holding.fromJson(JSON.stringify(holdingJson));
      });

      return new PortfolioResponse(jsonObject._success, holdings, jsonObject._message);
   }
}

export class QuoteResponse extends AppResponse {
   private _quote: Quote;

   constructor(success: boolean, quote: Quote, message: string | null) {
      super(success, message);
      this._quote = quote;
   }

   get quote() {
      return this._quote;
   }

   static fromJson(json: JSON): QuoteResponse {
      interface QuoteResponseJson extends ResponseJson {
         _quote: JSON;
      }

      const jsonObject: QuoteResponseJson =
         json as unknown as QuoteResponseJson;

      const quote = Quote.fromJson(JSON.stringify(jsonObject._quote));

      return new QuoteResponse(jsonObject._success, quote, jsonObject._message);
   }
}