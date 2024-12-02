"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginServicesImpl = void 0;
const class_validator_1 = require("class-validator");
const LoginDTO_1 = require("../../dtos/login/LoginDTO");
const BadRequestError_1 = require("../../../domain/exeptions/BadRequestError");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const UnauthorizedError_1 = require("../../../domain/exeptions/UnauthorizedError");
const RedisCacheService_1 = require("../../../infrastructure/cache/RedisCacheService");
class LoginServicesImpl {
    constructor(_userRepository) {
        this._userRepository = _userRepository;
    }
    async validateDTO(email, password) {
        const newLogin = new LoginDTO_1.LoginDTO(email, password);
        const loginToErros = await (0, class_validator_1.validate)(newLogin);
        if (loginToErros.length > 0) {
            const firstError = loginToErros[0];
            const errorMerssage = Object.values(firstError.constraints)[0];
            throw new BadRequestError_1.BadRequestError(errorMerssage);
        }
        const user = await this._userRepository.findUserWhitEmail(email);
        if (!user) {
            throw new UnauthorizedError_1.UnauthorizedError("Email ou senha incorretos");
        }
    }
    async checkPassword(password, user) {
        const passwordVerified = await bcrypt_1.default.compare(password, user.password);
        if (!passwordVerified) {
            throw new UnauthorizedError_1.UnauthorizedError("Email ou senha incorretos");
        }
    }
    async userLogged(user) {
        const token = jsonwebtoken_1.default.sign({ email: user.email }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        await RedisCacheService_1.redisCacheService.set(`auth_token:${user.email}`, token, 3600);
        console.log("Token armazenado no Redis:", token);
        return {
            user: {
                id: user.id,
                email: user.email,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            },
            token: token,
        };
    }
}
exports.LoginServicesImpl = LoginServicesImpl;
