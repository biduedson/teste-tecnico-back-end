"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthorizationMiddlewares = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const TokenError_1 = require("../../../domain/exeptions/TokenError");
const HttpErrorResponse_1 = require("../../../utils/HttpErrorResponse");
const RedisCacheService_1 = require("../../cache/RedisCacheService");
const JwtAuthorizationMiddlewares = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            throw new TokenError_1.TokenError("token não enviado");
        }
        try {
            const token = authorization.replace("Bearer ", "").trim();
            const decoded = jsonwebtoken_1.default.verify(token, String(process.env.JWT_SECRET));
            const email = decoded.email;
            const redisToken = await RedisCacheService_1.redisCacheService.get(`auth_token:${email}`);
            if (!redisToken) {
                throw new TokenError_1.TokenError("Token não encontrado no cache. Faça login novamente.");
            }
            next();
        }
        catch (error) {
            const { body, statusCode } = (0, HttpErrorResponse_1.httpErrorResponse)(error);
            return res.status(statusCode).json(body);
        }
    }
    catch (error) {
        const { body, statusCode } = (0, HttpErrorResponse_1.httpErrorResponse)(error);
        return res.status(statusCode).json(body);
    }
};
exports.JwtAuthorizationMiddlewares = JwtAuthorizationMiddlewares;
