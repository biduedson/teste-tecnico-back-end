"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRoutes = void 0;
const express_1 = require("express");
const TaskRepositoryImpl_1 = require("../infrastructure/repositories/task/TaskRepositoryImpl");
const TaskServicesImpl_1 = require("../aplication/serviceImpl/task/TaskServicesImpl");
const TaskController_1 = require("../infrastructure/http/controllers/task/TaskController");
const TasUseCasesImpl_1 = require("../aplication/usecasesImpl/tasks/TasUseCasesImpl");
const UserRepositoryImpl_1 = require("../infrastructure/repositories/user/UserRepositoryImpl");
const JwtAuthorizationMiddlewares_1 = require("../infrastructure/http/middlewares/JwtAuthorizationMiddlewares");
exports.taskRoutes = (0, express_1.Router)();
const repository = new TaskRepositoryImpl_1.TaskRepositoryImpl();
const userRepository = new UserRepositoryImpl_1.UserRepositoryImpl();
const services = new TaskServicesImpl_1.TaskServicesImpl(repository, userRepository);
const useCases = new TasUseCasesImpl_1.TaskUseCAsesImpl(repository, services);
const controller = new TaskController_1.TaskController(useCases);
exports.taskRoutes.post("/task", JwtAuthorizationMiddlewares_1.JwtAuthorizationMiddlewares, async (req, res) => {
    console.log("aqui");
    const { statusCode, body } = await controller.create({ body: req.body });
    res.status(statusCode).json(body);
});
exports.taskRoutes.delete("/task/:id", JwtAuthorizationMiddlewares_1.JwtAuthorizationMiddlewares, async (req, res, next) => {
    const { statusCode, body } = await controller.delete({
        params: req.params,
    });
    res.status(statusCode).json(body);
});
exports.taskRoutes.patch("/task", JwtAuthorizationMiddlewares_1.JwtAuthorizationMiddlewares, async (req, res, next) => {
    const { statusCode, body } = await controller.update({ body: req.body });
    res.status(statusCode).json(body);
});
exports.taskRoutes.get("/task", JwtAuthorizationMiddlewares_1.JwtAuthorizationMiddlewares, async (req, res, next) => {
    const { statusCode, body } = await controller.tasks();
    res.status(statusCode).json(body);
});
