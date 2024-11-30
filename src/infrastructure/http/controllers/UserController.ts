import { console } from "inspector";
import { IHttpRequest } from "../../../aplication/interfaces/http/IHttpRequest";
import { IHttpResponse } from "../../../aplication/interfaces/http/IHttpResponse";
import { IUser } from "../../../aplication/interfaces/user/IUser";
import { IUserUseCases } from "../../../aplication/interfaces/userUseCase/user/IUserUseCases";
import { errorHandlerUtils } from "../../../utils/ErrorHandlerUtils";

export class UserController {
  constructor(private readonly _userUseCases: IUserUseCases) {}

  async create(
    httpRequest: IHttpRequest<Omit<IUser, "id">>
  ): Promise<IHttpResponse<Omit<IUser, "password">>> {
    try {
      const user = await this._userUseCases.create(httpRequest.body!);
      return {
        statusCode: 201,
        body: user,
      };
    } catch (error) {
      const { statusCode, body } = errorHandlerUtils(error as Error);
      return {
        statusCode,
        body,
      };
    }
  }

  async delete(
    httpRequest: IHttpRequest<{ params: { id: string } }>
  ): Promise<IHttpResponse<void>> {
    try {
      await this._userUseCases.delete(httpRequest.params.id);
      return {
        statusCode: 204,
        body: "",
      };
    } catch (error) {
      const { statusCode, body } = errorHandlerUtils(error as Error);
      return {
        statusCode,
        body,
      };
    }
  }
}
