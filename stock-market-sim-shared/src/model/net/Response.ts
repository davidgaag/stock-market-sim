import { AuthToken } from "../domain/AuthToken.js";
import { User } from "../domain/User.js";

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