import { ITask } from "../../task/ITask";

export interface ITaskUseCases {
  create(task: Omit<ITask, "id">): Promise<ITask>;
  update(id: string, status: ITask["status"]): Promise<ITask>;
  delete(id: string): Promise<void>;
  tasks(): Promise<ITask[]>;
}
