import { NotFoundError } from "../../../domain/exeptions/NotFoundError";
import { ILoginResponse } from "../../interfaces/httpResponses/ILoginResponse";
import { IuserRepository } from "../../interfaces/repositories/user/IUserRepository";
import { ILoginUseCases } from "../../interfaces/userUseCase/login/ILoginUseCases";
import { ILoginServices } from "../../interfaces/services/ILoginServices";
export class LoginUseCasesImpl implements ILoginUseCases {
  constructor(
    private readonly _userRepository: IuserRepository,
    private readonly _loginService: ILoginServices
  ) {}

  async login(email: string, password: string): Promise<ILoginResponse> {
    await this._loginService.validateDTO(email, password);
    const user = await this._userRepository.findUserWhitEmail(email);
    if (!user) {
      throw new NotFoundError("Usuario não encontrado");
    }
    await this._loginService.checkPassword(password, user);

    return this._loginService.userLogged(user);
  }
}
