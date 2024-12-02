"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoutes = void 0;
const express_1 = require("express");
const UserRepositoryImpl_1 = require("../infrastructure/repositories/user/UserRepositoryImpl");
const LoginServicesImpl_1 = require("../aplication/serviceImpl/login/LoginServicesImpl");
const LoginUseCasesImpl_1 = require("../aplication/usecasesImpl/login/LoginUseCasesImpl");
const LoginController_1 = require("../infrastructure/http/controllers/login/LoginController");
exports.loginRoutes = (0, express_1.Router)();
const userRepository = new UserRepositoryImpl_1.UserRepositoryImpl();
const loginServices = new LoginServicesImpl_1.LoginServicesImpl(userRepository);
const loginUseCases = new LoginUseCasesImpl_1.LoginUseCasesImpl(userRepository, loginServices);
const logincontroller = new LoginController_1.Logincontroller(loginUseCases);
exports.loginRoutes.post("/login", async (req, res) => {
    const { statusCode, body } = await logincontroller.login({
        body: req.body,
    });
    res.status(statusCode).json(body);
});
