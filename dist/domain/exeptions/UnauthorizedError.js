"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = void 0;
class UnauthorizedError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 401;
        this.message = message;
        this.name = "unauthorizedError";
    }
}
exports.UnauthorizedError = UnauthorizedError;
