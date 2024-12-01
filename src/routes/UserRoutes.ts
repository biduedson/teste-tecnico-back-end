import { Router } from "express";
import { Request, Response } from "express";

import { UserRepositoryImpl } from "../infrastructure/repositories/user/UserRepositoryImpl";
import { UserServcicesImpl } from "../aplication/serviceImpl/UserServcicesImpl";
import { UserUseCaseImpl } from "../aplication/userUseCasesImpl/user/UserUseCaseImpl";
import { UserController } from "../infrastructure/http/controllers/UserController";

export const userRoutes = Router();

const userRepository = new UserRepositoryImpl();
const userServices = new UserServcicesImpl(userRepository);
const userUseCases = new UserUseCaseImpl(userRepository, userServices);

const userController = new UserController(userUseCases);

userRoutes.post("/user", async (req: Request, res: Response) => {
  const { statusCode, body } = await userController.create({ body: req.body! });
  res.status(statusCode).json(body);
});

userRoutes.delete("/user/:id", async (req: Request, res: Response) => {
  const { statusCode, body } = await userController.delete({
    params: req.params,
  });
  res.status(statusCode).json(body);
});

userRoutes.patch("/user", async (req: Request, res: Response) => {
  const { statusCode, body } = await userController.update({ body: req.body! });
  res.status(statusCode).json(body);
});

userRoutes.get("/user", async (req: Request, res: Response) => {
  const { statusCode, body } = await userController.users();
  res.status(statusCode).json(body);
});