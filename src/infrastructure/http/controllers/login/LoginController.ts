import { IHttpRequest } from "../../../../aplication/interfaces/http/IHttpRequest";
import { IHttpResponse } from "../../../../aplication/interfaces/http/IHttpResponse";
import { ILogin } from "../../../../aplication/interfaces/login/ILogin";
import { ILoginUseCases } from "../../../../aplication/interfaces/useCases/login/ILoginUseCases";
import { httpErrorResponse } from "../../../../utils/HttpErrorResponse";

export class Logincontroller {
  constructor(private readonly _loginUseCases: ILoginUseCases) {}

  async login(httpRequest: IHttpRequest<ILogin>): Promise<IHttpResponse<any>> {
    const { body } = httpRequest;
    try {
      const userLogged = await this._loginUseCases.login(
        body?.email!,
        body?.password!
      );
      return {
        statusCode: 200,
        body: userLogged,
      };
    } catch (error) {
      return httpErrorResponse(error as Error);
    }
  }
}
