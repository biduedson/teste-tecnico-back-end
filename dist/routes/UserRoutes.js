"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const UserRepositoryImpl_1 = require("../infrastructure/repositories/user/UserRepositoryImpl");
const UserServicesImpl_1 = require("../aplication/serviceImpl/user/UserServicesImpl");
const UserUseCaseImpl_1 = require("../aplication/usecasesImpl/user/UserUseCaseImpl");
const UserController_1 = require("../infrastructure/http/controllers/user/UserController");
exports.userRoutes = (0, express_1.Router)();
const userRepository = new UserRepositoryImpl_1.UserRepositoryImpl();
const userServices = new UserServicesImpl_1.UserServcicesImpl(userRepository);
const userUseCases = new UserUseCaseImpl_1.UserUseCaseImpl(userRepository, userServices);
const userController = new UserController_1.UserController(userUseCases);
exports.userRoutes.post("/user", async (req, res) => {
    const { statusCode, body } = await userController.create({ body: req.body });
    res.status(statusCode).json(body);
});
exports.userRoutes.post("/login", async (req, res) => {
    console.log("aqui");
    const { statusCode, body } = await userController.create({ body: req.body });
    res.status(statusCode).json(body);
});
