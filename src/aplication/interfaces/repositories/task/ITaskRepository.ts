import { ITask } from "../../task/ITask";

export interface ITaskRepository {
  create(task: Omit<ITask, "id">): Promise<ITask>;
  updateStatus(id: string, status: ITask["status"]): Promise<ITask>;
  delete(id: string): Promise<void>;
  tasks(): Promise<ITask[]>;
}
