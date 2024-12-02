"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUseCAsesImpl = void 0;
class TaskUseCAsesImpl {
    constructor(_repository, _service) {
        this._repository = _repository;
        this._service = _service;
    }
    async create(task) {
        await this._service.validateCreate(task);
        const newTask = await this._repository.create(task);
        return newTask;
    }
    async update(id, status) {
        await this._service.validateUpdate(id, status);
        const updatedStatus = await this._repository.updateStatus(id, status);
        return updatedStatus;
    }
    async delete(id) {
        await this._service.validateDelete(id);
        await this._repository.delete(id);
    }
    async tasks() {
        const tasks = await this._repository.tasks();
        return tasks;
    }
}
exports.TaskUseCAsesImpl = TaskUseCAsesImpl;
