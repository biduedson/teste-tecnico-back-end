import { IHttpRequest } from "../../../aplication/interfaces/http/IHttpRequest";
import { IHttpResponse } from "../../../aplication/interfaces/http/IHttpResponse";
import { IUser } from "../../../aplication/interfaces/user/IUser";
import { IUserUseCases } from "../../../aplication/interfaces/userUseCase/user/IUserUseCases";
import { httpErrorResponse } from "../../../utils/HttpErrorResponse";

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
      return httpErrorResponse(error as Error);
    }
  }
}
