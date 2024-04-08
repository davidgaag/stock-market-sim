import { AuthToken } from "../domain/AuthToken.js";
import { User } from "../domain/User.js";
export declare class AppResponse {
    private _success;
    private _message;
    constructor(success: boolean, message?: string | null);
    get success(): boolean;
    get message(): string | null;
    static fromJson(json: JSON): AppResponse;
}
export declare class AuthResponse extends AppResponse {
    private _user;
    private _token;
    constructor(success: boolean, user: User, token: AuthToken, message: string | null);
    get user(): User;
    get token(): AuthToken;
    static fromJson(json: JSON): AuthResponse;
}
