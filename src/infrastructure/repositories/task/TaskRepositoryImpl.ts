import { ITaskRepository } from "../../../aplication/interfaces/repositories/task/ITaskRepository";
import { ITask } from "../../../aplication/interfaces/task/ITask";
import { prisma } from "../../database/client";

export class TaskRepositoryImpl implements ITaskRepository {
  async tasks(): Promise<ITask[]> {
    const tasks = await prisma.task.findMany({
      include: {
        user: true,
      },
    });
    return tasks;
  }

  async create(task: Omit<ITask, "id">): Promise<ITask> {
    const newTask = await prisma.task.create({ data: task });
    return newTask;
  }

  async updateStatus(id: string, status: ITask["status"]): Promise<ITask> {
    const task = await prisma.task.update({
      where: { id },
      data: {
        status,
      },
    });

    return task;
  }

  async delete(id: string): Promise<void> {
    await prisma.task.delete({ where: { id } });
  }
  async findTask(id: string): Promise<ITask | null> {
    const task = await prisma.task.findUnique({ where: { id } });
    return task;
  }
}
