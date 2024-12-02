import { Request, Response, Router } from "express";
import { UserRepositoryImpl } from "../infrastructure/repositories/user/UserRepositoryImpl";
import { LoginServicesImpl } from "../aplication/serviceImpl/LoginServicesImpl";
import { LoginUseCasesImpl } from "../aplication/userUseCasesImpl/login/LoginUseCasesImpl";
import { Logincontroller } from "../infrastructure/http/controllers/LoginController";

export const loginRoutes = Router();

const userRepository = new UserRepositoryImpl();
const loginServices = new LoginServicesImpl(userRepository);
const loginUseCases = new LoginUseCasesImpl(userRepository, loginServices);
const logincontroller = new Logincontroller(loginUseCases);

loginRoutes.post("/login", async (req: Request, res: Response) => {
  const { statusCode, body } = await logincontroller.login({
    body: req.body,
  });
  res.status(statusCode).json(body);
});
