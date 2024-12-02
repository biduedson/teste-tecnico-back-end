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
exports.CreateTaskDTO = void 0;
const class_validator_1 = require("class-validator");
require("reflect-metadata");
class CreateTaskDTO {
    constructor(title, description, status, userId) {
        this.title = title;
        this.description = description;
        this.status = status;
        this.userId = userId;
    }
}
exports.CreateTaskDTO = CreateTaskDTO;
__decorate([
    (0, class_validator_1.IsString)({ message: "O título da tarefa deve ser uma string." }),
    (0, class_validator_1.IsNotEmpty)({ message: "O título da tarefa não pode estar vazio." }),
    __metadata("design:type", String)
], CreateTaskDTO.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "A descrição da tarefa deve ser uma string." }),
    (0, class_validator_1.IsNotEmpty)({ message: "A descrição da tarefa não pode estar vazia." }),
    __metadata("design:type", String)
], CreateTaskDTO.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "O status da tarefa deve ser uma string." }),
    (0, class_validator_1.IsNotEmpty)({ message: "O status não pode estar vazio." }),
    (0, class_validator_1.IsIn)(["PENDING", "COMPLETE"], {
        message: "O status deve ser 'PENDING' ou 'COMPLETE'.",
    }),
    __metadata("design:type", String)
], CreateTaskDTO.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "O ID do usuário deve ser uma string." }),
    (0, class_validator_1.IsNotEmpty)({ message: "O ID do usuário não pode estar vazio." }),
    __metadata("design:type", String)
], CreateTaskDTO.prototype, "userId", void 0);
