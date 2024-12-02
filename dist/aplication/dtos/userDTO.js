"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDTO = void 0;
const class_validator_1 = require("class-validator");
require("reflect-metadata");
const class_transformer_1 = require("class-transformer");
const CreateTaskDTO_1 = require("./task/CreateTaskDTO");
class UserDTO {
    constructor(email, password, tasks) {
        this.email = email;
        this.password = password;
        this.tasks = tasks;
    }
}
exports.UserDTO = UserDTO;
__decorate([
    (0, class_validator_1.IsString)({ message: "O e-mail do usuário deve ser uma string." }),
    (0, class_validator_1.IsNotEmpty)({ message: "O e-mail do usuário não pode estar vazio." }),
    (0, class_validator_1.IsEmail)({}, { message: "O e-mail fornecido não tem um formato válido." }),
    __metadata("design:type", String)
], UserDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "A senha do usuário deve ser uma string." }),
    (0, class_validator_1.IsNotEmpty)({ message: "A senha não pode estar vazia." }),
    __metadata("design:type", String)
], UserDTO.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CreateTaskDTO_1.CreateTaskDTO),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UserDTO.prototype, "tasks", void 0);
