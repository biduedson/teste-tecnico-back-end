import { ITaskRepository } from "../interfaces/repositories/task/ITaskRepository";
import { ITaskService } from "../interfaces/services/ITaskService";
import { ITaskUseCases } from "../interfaces/taskUseCases/ITaskUseCases";
import { ITask } from "../interfaces/task/ITask";

export class TaskUseCAsesImpl implements ITaskUseCases {
  constructor(
    private _repository: ITaskRepository,
    private readonly _service: ITaskService
  ) {}
  async create(task: Omit<ITask, "id">): Promise<ITask> {
    await this._service.validateCreate(task);
    const newTask = await this._repository.create(task);
    return newTask;
  }

  async update(id: string, status: ITask["status"]): Promise<ITask> {
    await this._service.validateUpdate(id, status);
    const updatedStatus = await this._repository.updateStatus(id, status);
    return updatedStatus;
  }

  async delete(id: string): Promise<void> {
    await this._service.validateDelete(id);
    await this._repository.delete(id);
  }
  async tasks(): Promise<ITask[]> {
    const tasks = await this._repository.tasks();
    return tasks;
  }
}
