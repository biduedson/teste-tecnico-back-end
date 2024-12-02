"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServcicesImpl = void 0;
const class_validator_1 = require("class-validator");
const userDTO_1 = require("../../dtos/userDTO");
const BadRequestError_1 = require("../../../domain/exeptions/BadRequestError");
const AlreadyExistsError_1 = require("../../../domain/exeptions/AlreadyExistsError");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserServcicesImpl {
    constructor(_repository) {
        this._repository = _repository;
        this.encryptPassword = (password) => {
            const passwordBcrypt = bcrypt_1.default.hashSync(password, 10);
            return passwordBcrypt;
        };
    }
    async validateCreate(userDto) {
        if (userDto.email.length === 0) {
            throw new BadRequestError_1.BadRequestError("O campo de email não pode estar vazio.");
        }
        if (userDto.password.length === 0) {
            throw new BadRequestError_1.BadRequestError("O campo de password não pode estar vazio.");
        }
        if (userDto.password.length < 6) {
            throw new BadRequestError_1.BadRequestError("O password deve ter pelo menos 6 caracteres.");
        }
        const user = new userDTO_1.UserDTO(userDto.email, userDto.password);
        const userDtoErros = await (0, class_validator_1.validate)(user);
        if (userDtoErros.length > 0) {
            const firstError = userDtoErros[0];
            const errorMerssage = Object.values(firstError.constraints)[0];
            throw new BadRequestError_1.BadRequestError(errorMerssage);
        }
        const userExisting = await this._repository.findUserWhitEmail(userDto.email);
        if (userExisting) {
            throw new AlreadyExistsError_1.AlreadyExistsError("Ja existe um usuario com este email.");
        }
    }
}
exports.UserServcicesImpl = UserServcicesImpl;
