import { AuthToken } from "../domain/AuthToken";
export declare class AppRequest {
}
export declare class LoginRequest extends AppRequest {
    private _username;
    private _password;
    constructor(username: string, password: string);
    get username(): string;
    get password(): string;
}
export declare class RegisterRequest extends AppRequest {
    private _firstName;
    private _lastName;
    private _alias;
    private _password;
    private _imageStringBase64;
    constructor(firstName: string, lastName: string, alias: string, password: string, imageBytes: string);
    get firstName(): string;
    get lastName(): string;
    get alias(): string;
    get password(): string;
    get imageStringBase64(): string;
}
export declare class LogOutRequest extends AppRequest {
    private _authToken;
    constructor(authToken: AuthToken);
    get authToken(): AuthToken;
    static fromJson(json: JSON): LogOutRequest;
}
