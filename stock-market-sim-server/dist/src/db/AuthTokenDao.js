"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAuthToken = exports.getAuthToken = exports.putAuthToken = void 0;
const PostgresSetup_1 = __importDefault(require("./PostgresSetup"));
function putAuthToken(userId, token, expiration) {
    return __awaiter(this, void 0, void 0, function* () {
        PostgresSetup_1.default.query(`INSERT INTO auth_token (user_id, token, expiration) VALUES ($1, $2, $3)`, [userId, token, expiration]);
    });
}
exports.putAuthToken = putAuthToken;
function getAuthToken(token) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield PostgresSetup_1.default.query(`SELECT * FROM auth_token WHERE token = $1`, [token]);
        return res.rows[0];
    });
}
exports.getAuthToken = getAuthToken;
function deleteAuthToken(token) {
    return __awaiter(this, void 0, void 0, function* () {
        PostgresSetup_1.default.query(`DELETE FROM auth_token WHERE token = $1`, [token]);
    });
}
exports.deleteAuthToken = deleteAuthToken;
