"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const HttpErrorResponse_1 = require("../../../../utils/HttpErrorResponse");
class TaskController {
    constructor(_useCases) {
        this._useCases = _useCases;
    }
    async create(httpRequest) {
        try {
            const task = await this._useCases.create(httpRequest.body);
            return {
                statusCode: 201,
                body: task,
            };
        }
        catch (error) {
            return (0, HttpErrorResponse_1.httpErrorResponse)(error);
        }
    }
    async update(httpResquest) {
        try {
            const { id, status } = httpResquest.body;
            const taskStatusUpdated = await this._useCases.update(id, status);
            return {
                statusCode: 200,
                body: taskStatusUpdated,
            };
        }
        catch (error) {
            return (0, HttpErrorResponse_1.httpErrorResponse)(error);
        }
    }
    async delete(httpRequest) {
        try {
            await this._useCases.delete(httpRequest.params.id);
            return {
                statusCode: 204,
                body: "",
            };
        }
        catch (error) {
            return (0, HttpErrorResponse_1.httpErrorResponse)(error);
        }
    }
    async tasks() {
        try {
            const tasks = await this._useCases.tasks();
            return {
                statusCode: 200,
                body: tasks,
            };
        }
        catch (error) {
            return (0, HttpErrorResponse_1.httpErrorResponse)(error);
        }
    }
}
exports.TaskController = TaskController;
