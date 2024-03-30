import { AuthToken } from "../domain/AuthToken";
import { User } from "../domain/User";
export declare class TweeterResponse {
    private _success;
    private _message;
    constructor(success: boolean, message?: string | null);
    get success(): boolean;
    get message(): string | null;
    static fromJson(json: JSON): TweeterResponse;
}
export declare class AuthResponse extends TweeterResponse {
    private _user;
    private _token;
    constructor(success: boolean, user: User, token: AuthToken, message: string | null);
    get user(): User;
    get token(): AuthToken;
    static fromJson(json: JSON): AuthResponse;
}
