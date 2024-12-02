import { NextFunction, Router } from "express";
import { Request, Response } from "express";
import { TaskRepositoryImpl } from "../infrastructure/repositories/task/TaskRepositoryImpl";
import { TaskServicesImpl } from "../aplication/serviceImpl/task/TaskServicesImpl";
import { TaskController } from "../infrastructure/http/controllers/task/TaskController";
import { TaskUseCAsesImpl } from "../aplication/usecasesImpl/tasks/TasUseCasesImpl";
import { UserRepositoryImpl } from "../infrastructure/repositories/user/UserRepositoryImpl";
import { JwtAuthorizationMiddlewares } from "../infrastructure/http/middlewares/JwtAuthorizationMiddlewares";

export const taskRoutes = Router();

const repository = new TaskRepositoryImpl();
const userRepository = new UserRepositoryImpl();
const services = new TaskServicesImpl(repository, userRepository);
const useCases = new TaskUseCAsesImpl(repository, services);
const controller = new TaskController(useCases);

taskRoutes.post(
  "/task",
  JwtAuthorizationMiddlewares,
  async (req: Request, res: Response) => {
    console.log("aqui");
    const { statusCode, body } = await controller.create({ body: req.body! });
    res.status(statusCode).json(body);
  }
);

taskRoutes.delete(
  "/task/:id",
  JwtAuthorizationMiddlewares,
  async (req: Request, res: Response, next: NextFunction) => {
    const { statusCode, body } = await controller.delete({
      params: req.params,
    });
    res.status(statusCode).json(body);
  }
);

taskRoutes.patch(
  "/task",
  JwtAuthorizationMiddlewares,
  async (req: Request, res: Response, next: NextFunction) => {
    const { statusCode, body } = await controller.update({ body: req.body! });
    res.status(statusCode).json(body);
  }
);

taskRoutes.get(
  "/task",
  JwtAuthorizationMiddlewares,
  async (req: Request, res: Response, next: NextFunction) => {
    const { statusCode, body } = await controller.tasks();
    res.status(statusCode).json(body);
  }
);
