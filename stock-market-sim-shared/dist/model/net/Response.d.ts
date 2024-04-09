import { AuthToken } from "../domain/AuthToken.js";
import { User } from "../domain/User.js";
import { Holding } from "../domain/Holding.js";
import { Quote } from "../domain/Quote.js";
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
export declare class PortfolioResponse extends AppResponse {
    private _holdings;
    constructor(success: boolean, holdings: Holding[], message: string | null);
    get holdings(): Holding[];
    static fromJson(json: JSON): PortfolioResponse;
}
export declare class QuoteResponse extends AppResponse {
    private _quote;
    constructor(success: boolean, quote: Quote, message: string | null);
    get quote(): Quote;
    static fromJson(json: JSON): QuoteResponse;
}
