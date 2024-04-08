import { AuthToken } from "../domain/AuthToken.js";
export class AppRequest {}
export class LoginRequest extends AppRequest {
  _username;
  _password;
  constructor(username, password) {
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
  toJSON() {
    return {
      username: this._username,
      password: this._password
    };
  }
}
export class AuthTokenRequest extends AppRequest {
  _authToken;
  constructor(authToken) {
    super();
    this._authToken = authToken;
  }
  get authToken() {
    return this._authToken;
  }
  static fromJson(json) {
    const jsonObject = json;
    const deserializedToken = AuthToken.fromJson(JSON.stringify(jsonObject._authToken));
    if (deserializedToken === null) {
      throw new Error("AuthTokenRequest, could not deserialize token with json:\n" + JSON.stringify(jsonObject._authToken));
    }
    return new AuthTokenRequest(deserializedToken);
  }
  toJSON() {
    return {
      authToken: this._authToken
    };
  }
}
export class RegisterRequest extends AppRequest {
  _firstName;
  _lastName;
  _alias;
  _password;
  constructor(firstName, lastName, alias, password) {
    super();
    this._firstName = firstName;
    this._lastName = lastName;
    this._alias = alias;
    this._password = password;
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
  toJSON() {
    return {
      firstName: this._firstName,
      lastName: this._lastName,
      alias: this._alias,
      password: this._password
    };
  }
}