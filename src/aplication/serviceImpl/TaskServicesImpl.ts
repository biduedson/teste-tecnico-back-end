import { validate } from "class-validator";
import { CreateTaskDTO } from "../dtos/task/CreateTaskDTO";
import { ITaskService } from "../interfaces/services/ITaskService";
import { ITask } from "../interfaces/task/ITask";
import { BadRequestError } from "../../domain/exeptions/BadRequestError";
import { ITaskRepository } from "../interfaces/repositories/task/ITaskRepository";
import { UpdateTaskStatusDTO } from "../dtos/task/UpdateTaskStatusDTO";
import { NotFoundError } from "../../domain/exeptions/NotFoundError";
import { IuserRepository } from "../interfaces/repositories/user/IUserRepository";

export class TaskServicesImpl implements ITaskService {
  constructor(
    private readonly _repository: ITaskRepository,
    private readonly _userRepository: IuserRepository
  ) {}

  async validateCreate(task: ITask): Promise<void> {
    const newTask = new CreateTaskDTO(
      task.title,
      task.description,
      task.status,
      task.userId
    );

    const tasktoErros = await validate(newTask);

    if (tasktoErros.length > 0) {
      const firstError = tasktoErros[0];
      const errorMerssage = Object.values(firstError.constraints!)[0];
      throw new BadRequestError(errorMerssage);
    }
    const user = await this._userRepository.findUser(task.userId);
    if (!user) {
      throw new NotFoundError("Usuario não encontrado.");
    }
  }

  async validateUpdate(id: string, status: ITask["status"]): Promise<void> {
    if (status.length === 0) {
      throw new BadRequestError("O status da tarefa não pode estar vazio.");
    }
    const taskExisting = this._repository.findTask(id);
    if (!taskExisting) {
      throw new NotFoundError("Esta tarefa não existe não existe.");
    }

    const statusUpdated = await new UpdateTaskStatusDTO(id, status);
    const updateStatusErrors = await validate(statusUpdated);

    if (updateStatusErrors.length > 0) {
      const firstError = updateStatusErrors[0];
      const errorMerssage = Object.values(firstError.constraints!)[0];
      throw new BadRequestError(errorMerssage);
    }
  }

  async validateDelete(id: string): Promise<void> {
    const taskExisting = await this._repository.findTask(id);

    if (!taskExisting) {
      throw new NotFoundError(" tarefa não Encontrada.");
    }
  }
}
