"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskServicesImpl = void 0;
const class_validator_1 = require("class-validator");
const CreateTaskDTO_1 = require("../../dtos/task/CreateTaskDTO");
const BadRequestError_1 = require("../../../domain/exeptions/BadRequestError");
const UpdateTaskStatusDTO_1 = require("../../dtos/task/UpdateTaskStatusDTO");
const NotFoundError_1 = require("../../../domain/exeptions/NotFoundError");
class TaskServicesImpl {
    constructor(_repository, _userRepository) {
        this._repository = _repository;
        this._userRepository = _userRepository;
    }
    async validateCreate(task) {
        if (task.status.length === 0) {
            throw new BadRequestError_1.BadRequestError("O campo de status não pode estar vazio.");
        }
        const newTask = new CreateTaskDTO_1.CreateTaskDTO(task.title, task.description, task.status, task.userId);
        const tasktoErros = await (0, class_validator_1.validate)(newTask);
        if (tasktoErros.length > 0) {
            const firstError = tasktoErros[0];
            const errorMerssage = Object.values(firstError.constraints)[0];
            throw new BadRequestError_1.BadRequestError(errorMerssage);
        }
        const user = await this._userRepository.findUser(task.userId);
        if (!user) {
            throw new NotFoundError_1.NotFoundError("Usuario não encontrado.");
        }
    }
    async validateUpdate(id, status) {
        if (status.length === 0) {
            throw new BadRequestError_1.BadRequestError("O status da tarefa não pode estar vazio.");
        }
        const taskExisting = this._repository.findTask(id);
        if (!taskExisting) {
            throw new NotFoundError_1.NotFoundError("Esta tarefa não existe não existe.");
        }
        const user = await this._userRepository.findUser(id);
        if (!user) {
            throw new NotFoundError_1.NotFoundError("Usuario não encontrado.");
        }
        const statusUpdated = await new UpdateTaskStatusDTO_1.UpdateTaskStatusDTO(id, status);
        const updateStatusErrors = await (0, class_validator_1.validate)(statusUpdated);
        if (updateStatusErrors.length > 0) {
            const firstError = updateStatusErrors[0];
            const errorMerssage = Object.values(firstError.constraints)[0];
            throw new BadRequestError_1.BadRequestError(errorMerssage);
        }
    }
    async validateDelete(id) {
        const taskExisting = await this._repository.findTask(id);
        if (!taskExisting) {
            throw new NotFoundError_1.NotFoundError(" tarefa não Encontrada.");
        }
    }
}
exports.TaskServicesImpl = TaskServicesImpl;
