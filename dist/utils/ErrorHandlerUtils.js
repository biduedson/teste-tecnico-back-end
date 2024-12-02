"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerUtils = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const AlreadyExistsError_1 = require("../domain/exeptions/AlreadyExistsError");
const BadRequestError_1 = require("../domain/exeptions/BadRequestError");
const NotFoundError_1 = require("../domain/exeptions/NotFoundError");
const TokenError_1 = require("../domain/exeptions/TokenError");
const UnauthorizedError_1 = require("../domain/exeptions/UnauthorizedError");
const errorHandlerUtils = (error) => {
    if (error instanceof AlreadyExistsError_1.AlreadyExistsError ||
        error instanceof BadRequestError_1.BadRequestError ||
        error instanceof NotFoundError_1.NotFoundError ||
        error instanceof AlreadyExistsError_1.AlreadyExistsError ||
        error instanceof TokenError_1.TokenError ||
        error instanceof UnauthorizedError_1.UnauthorizedError) {
        return {
            statusCode: error.statusCode,
            body: error.message,
        };
    }
    if (error instanceof jsonwebtoken_1.TokenExpiredError) {
        return {
            statusCode: 401,
            body: "Token expirado, faça login novamente.",
        };
    }
    if (error instanceof jsonwebtoken_1.JsonWebTokenError) {
        return {
            statusCode: 401,
            body: "Token inválido ou malformado",
        };
    }
    return {
        statusCode: 500,
        body: `Erro interno do servidor, erro: ${error}`,
    };
};
exports.errorHandlerUtils = errorHandlerUtils;
