import { AuthToken } from "../domain/AuthToken.js";
import { User } from "../domain/User.js";
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