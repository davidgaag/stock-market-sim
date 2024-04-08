import { AuthToken } from "../domain/AuthToken";
import { User } from "../domain/User";

export class AppRequest { }

export class LoginRequest extends AppRequest {
   private _username: string;
   private _password: string;

   constructor(username: string, password: string) {
      super();
      this._username = username;
      this._password = password;
   }

   get username() {
      return this._username;
   }

   get password() {
      return this._password;
   }
}

export class AuthTokenRequest extends AppRequest {
   private _authToken: AuthToken;

   constructor(authToken: AuthToken) {
      super();
      this._authToken = authToken;
   }

   get authToken() {
      return this._authToken;
   }

   static fromJson(json: JSON) {
      interface AuthTokenRequestJson {
         _authToken: AuthToken;
      }

      const jsonObject: AuthTokenRequestJson = json as unknown as AuthTokenRequestJson;
      const deserializedToken = AuthToken.fromJson(JSON.stringify(jsonObject._authToken));

      if (deserializedToken === null) {
         throw new Error(
            "AuthTokenRequest, could not deserialize token with json:\n" +
            JSON.stringify(jsonObject._authToken)
         );
      }
      return new AuthTokenRequest(deserializedToken);
   }

}

export class RegisterRequest extends AppRequest {
   private _firstName: string;
   private _lastName: string;
   private _alias: string;
   private _password: string;
   private _imageStringBase64: string;

   constructor(firstName: string, lastName: string, alias: string, password: string, imageBytes: string) {
      super();
      this._firstName = firstName;
      this._lastName = lastName;
      this._alias = alias;
      this._password = password;
      this._imageStringBase64 = imageBytes;
   }

   get firstName() {
      return this._firstName;
   }

   get lastName() {
      return this._lastName;
   }

   get alias() {
      return this._alias;
   }

   get password() {
      return this._password;
   }

   get imageStringBase64() {
      return this._imageStringBase64;
   }
}

export class LogOutRequest extends AppRequest {
   private _authToken: AuthToken;

   constructor(authToken: AuthToken) {
      super();
      this._authToken = authToken;
   }

   get authToken() {
      return this._authToken;
   }

   static fromJson(json: JSON): LogOutRequest {
      interface LogOutRequestJson {
         _authToken: AuthToken;
      }

      const jsonObject: LogOutRequestJson = json as unknown as LogOutRequestJson;
      const deserializedToken = AuthToken.fromJson(JSON.stringify(jsonObject._authToken));

      if (deserializedToken === null) {
         throw new Error(
            "LogOutRequest, could not deserialize token with json:\n" +
            JSON.stringify(jsonObject._authToken)
         );
      }

      return new LogOutRequest(
         deserializedToken
      );
   }
}