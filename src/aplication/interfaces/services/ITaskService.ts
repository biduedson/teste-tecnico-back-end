import { ITask } from "../task/ITask";

export interface ITaskService {
  validateCreate(task: Omit<ITask, "id">): Promise<void>;
  validateUpdate(id: string, status: ITask["status"]): Promise<void>;
  validateDelete(id: string): Promise<void>;
}
