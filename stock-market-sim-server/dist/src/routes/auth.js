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
const express_1 = require("express");
const UserDao_1 = require("../db/UserDao");
const AuthTokenDao_1 = require("../db/AuthTokenDao");
const stock_market_sim_shared_1 = require("stock-market-sim-shared");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const Response_1 = require("stock-market-sim-shared/dist/model/net/Response");
const router = (0, express_1.Router)();
router.get('/auth/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.username || !req.body.password) {
        res.status(400).send(new Response_1.TweeterResponse(false, "Invalid request"));
    }
    const username = req.body.username;
    const password = req.body.password;
    const userRow = yield (0, UserDao_1.getUser)(username);
    if (!userRow) {
        res.status(400).json(new Response_1.TweeterResponse(false, "Username or password is incorrect"));
    }
    const user = new stock_market_sim_shared_1.User("First", "Last", userRow.id, "URL");
    if (yield comparePasswords(password, userRow.password)) {
        const token = stock_market_sim_shared_1.AuthToken.Generate();
        const response = new stock_market_sim_shared_1.AuthResponse(true, user, token, "Login successful");
        yield (0, AuthTokenDao_1.putAuthToken)(userRow.id, token.token, token.timestamp + 1000 * 60 * 60 * 24);
        res.status(200).json(response);
    }
    else {
        res.status(400).json(new Response_1.TweeterResponse(false, "Username or password is incorrect"));
    }
}));
router.get('/auth/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.alias || !req.body.password) {
        res.status(400).json(new Response_1.TweeterResponse(false, "Invalid request"));
    }
    const username = req.body.alias;
    const password = req.body.password;
    if (yield (0, UserDao_1.getUser)(username)) {
        res.status(409).send(new Response_1.TweeterResponse(false, "Username already exists"));
    }
    yield (0, UserDao_1.putUser)(username, yield hashPassword(password));
    const user = new stock_market_sim_shared_1.User("First", "Last", username, "URL");
    const token = stock_market_sim_shared_1.AuthToken.Generate();
    yield (0, AuthTokenDao_1.putAuthToken)(username, token.token, token.timestamp + 1000 * 60 * 60 * 24);
    res.status(201).send(new stock_market_sim_shared_1.AuthResponse(true, user, token, "Registration successful"));
}));
router.get('/auth/logout', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO: Implement logout
}));
function hashPassword(password) {
    return __awaiter(this, void 0, void 0, function* () {
        const saltRounds = 10;
        return yield bcryptjs_1.default
            .genSalt(saltRounds)
            .then(salt => {
            return bcryptjs_1.default.hash(password, salt);
        });
    });
}
function comparePasswords(password, hashedPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcryptjs_1.default.compare(password, hashedPassword);
    });
}
exports.default = router;
