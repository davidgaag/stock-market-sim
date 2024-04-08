import { AuthToken } from "../domain/AuthToken.js";
export declare class AppRequest {
}
export declare class LoginRequest extends AppRequest {
    private _username;
    private _password;
    constructor(username: string, password: string);
    get username(): string;
    get password(): string;
    toJSON(): {
        username: string;
        password: string;
    };
}
export declare class AuthTokenRequest extends AppRequest {
    private _authToken;
    constructor(authToken: AuthToken);
    get authToken(): AuthToken;
    static fromJson(json: JSON): AuthTokenRequest;
    toJSON(): {
        authToken: AuthToken;
    };
}
export declare class RegisterRequest extends AppRequest {
    private _firstName;
    private _lastName;
    private _alias;
    private _password;
    constructor(firstName: string, lastName: string, alias: string, password: string);
    get firstName(): string;
    get lastName(): string;
    get alias(): string;
    get password(): string;
    toJSON(): {
        firstName: string;
        lastName: string;
        alias: string;
        password: string;
    };
}
