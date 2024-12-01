import { IHttpRequest } from "../../../aplication/interfaces/http/IHttpRequest";
import { IHttpResponse } from "../../../aplication/interfaces/http/IHttpResponse";
import { ITask } from "../../../aplication/interfaces/task/ITask";
import { ITaskUseCases } from "../../../aplication/interfaces/taskUseCases/ITaskUseCases";
import { httpErrorResponse } from "../../../utils/HttpErrorResponse";

export class TaskController {
  constructor(private readonly _useCases: ITaskUseCases) {}

  async create(
    httpRequest: IHttpRequest<Omit<ITask, "id">>
  ): Promise<IHttpResponse<ITask>> {
    try {
      const task = await this._useCases.create(httpRequest.body!);
      return {
        statusCode: 201,
        body: task,
      };
    } catch (error) {
      return httpErrorResponse(error as Error);
    }
  }

  async update(
    httpResquest: IHttpRequest<{ id: string; status: ITask["status"] }>
  ): Promise<IHttpResponse<ITask>> {
    try {
      const { id, status } = httpResquest.body!;
      const taskStatusUpdated = await this._useCases.update(id, status);
      return {
        statusCode: 200,
        body: taskStatusUpdated,
      };
    } catch (error) {
      return httpErrorResponse(error as Error);
    }
  }

  async delete(
    httpRequest: IHttpRequest<{ params: { id: string } }>
  ): Promise<IHttpResponse<void>> {
    try {
      await this._useCases.delete(httpRequest.params.id);
      return {
        statusCode: 204,
        body: "",
      };
    } catch (error) {
      return httpErrorResponse(error as Error);
    }
  }

  async tasks(): Promise<IHttpResponse<ITask[]>> {
    try {
      const tasks = await this._useCases.tasks();
      return {
        statusCode: 200,
        body: tasks,
      };
    } catch (error) {
      return httpErrorResponse(error as Error);
    }
  }
}
