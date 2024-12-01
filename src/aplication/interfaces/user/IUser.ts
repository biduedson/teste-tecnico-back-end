import { ITask } from "../task/ITask";

export interface IUser {
  id: string;
  email: string;
  password: string;
  tasks?: ITask[]; // Representa a relação do usuário com suas tarefas
  createdAt?: Date;
  updatedAt?: Date;
}
