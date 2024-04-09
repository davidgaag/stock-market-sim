import { AuthToken } from "../domain/AuthToken.js";
import { User } from "../domain/User.js";
import { Holding } from "../domain/Holding.js";
import { Quote } from "../domain/Quote.js";
export class AppResponse {
  _success;
  _message;
  constructor(success, message = null) {
    this._success = success;
    this._message = message;
  }
  get success() {
    return this._success;
  }
  get message() {
    return this._message;
  }
  static fromJson(json) {
    const jsonObject = json;
    return new AppResponse(jsonObject._success, jsonObject._message);
  }
}
export class AuthResponse extends AppResponse {
  _user;
  _token;
  constructor(success, user, token, message) {
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
  static fromJson(json) {
    const jsonObject = json;
    const deserializedUser = User.fromJson(JSON.stringify(jsonObject._user));
    if (deserializedUser === null) {
      throw new Error("AuthResponse, could not deserialize user with json:\n" + JSON.stringify(jsonObject._user));
    }
    const deserializedToken = AuthToken.fromJson(JSON.stringify(jsonObject._token));
    if (deserializedToken === null) {
      throw new Error("AuthResponse, could not deserialize token with json:\n" + JSON.stringify(jsonObject._token));
    }
    return new AuthResponse(jsonObject._success, deserializedUser, deserializedToken, jsonObject._message);
  }
}
export class PortfolioResponse extends AppResponse {
  _holdings;
  constructor(success, holdings, message) {
    super(success, message);
    this._holdings = holdings;
  }
  get holdings() {
    return this._holdings;
  }
  static fromJson(json) {
    const jsonObject = json;
    const holdings = jsonObject._holdings.map(holdingJson => {
      return Holding.fromJson(JSON.stringify(holdingJson));
    });
    return new PortfolioResponse(jsonObject._success, holdings, jsonObject._message);
  }
}
export class QuoteResponse extends AppResponse {
  _quote;
  constructor(success, quote, message) {
    super(success, message);
    this._quote = quote;
  }
  get quote() {
    return this._quote;
  }
  static fromJson(json) {
    const jsonObject = json;
    const quote = Quote.fromJson(JSON.stringify(jsonObject._quote));
    return new QuoteResponse(jsonObject._success, quote, jsonObject._message);
  }
}