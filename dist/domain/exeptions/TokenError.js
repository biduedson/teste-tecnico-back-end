"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenError = void 0;
class TokenError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 401;
        this.message = message;
        this.name = "TokenError";
    }
}
exports.TokenError = TokenError;
