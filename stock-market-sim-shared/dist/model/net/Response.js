"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResponse = exports.TweeterResponse = void 0;
const AuthToken_1 = require("../domain/AuthToken");
const User_1 = require("../domain/User");
class TweeterResponse {
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
        return new TweeterResponse(jsonObject._success, jsonObject._message);
    }
}
exports.TweeterResponse = TweeterResponse;
class AuthResponse extends TweeterResponse {
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
        const deserializedUser = User_1.User.fromJson(JSON.stringify(jsonObject._user));
        if (deserializedUser === null) {
            throw new Error("AuthResponse, could not deserialize user with json:\n" +
                JSON.stringify(jsonObject._user));
        }
        const deserializedToken = AuthToken_1.AuthToken.fromJson(JSON.stringify(jsonObject._token));
        if (deserializedToken === null) {
            throw new Error("AuthResponse, could not deserialize token with json:\n" +
                JSON.stringify(jsonObject._token));
        }
        return new AuthResponse(jsonObject._success, deserializedUser, deserializedToken, jsonObject._message);
    }
}
exports.AuthResponse = AuthResponse;
