"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogOutRequest = exports.RegisterRequest = exports.LoginRequest = exports.AppRequest = void 0;
const AuthToken_1 = require("../domain/AuthToken");
class AppRequest {
}
exports.AppRequest = AppRequest;
// TODO: M4: Remove duplication - AuthToken Request that can be subclassed 
class LoginRequest extends AppRequest {
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
}
exports.LoginRequest = LoginRequest;
class RegisterRequest extends AppRequest {
    _firstName;
    _lastName;
    _alias;
    _password;
    _imageStringBase64;
    constructor(firstName, lastName, alias, password, imageBytes) {
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
exports.RegisterRequest = RegisterRequest;
class LogOutRequest extends AppRequest {
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
        const deserializedToken = AuthToken_1.AuthToken.fromJson(JSON.stringify(jsonObject._authToken));
        if (deserializedToken === null) {
            throw new Error("LogOutRequest, could not deserialize token with json:\n" +
                JSON.stringify(jsonObject._authToken));
        }
        return new LogOutRequest(deserializedToken);
    }
}
exports.LogOutRequest = LogOutRequest;
