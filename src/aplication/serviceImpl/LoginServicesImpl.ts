import { validate } from "class-validator";
import { LoginDTO } from "../dtos/login/LoginDTO";
import { IuserRepository } from "../interfaces/repositories/user/IUserRepository";
import { BadRequestError } from "../../domain/exeptions/BadRequestError";
import { NotFoundError } from "../../domain/exeptions/NotFoundError";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { IUser } from "../interfaces/user/IUser";
import { ILoginResponse } from "../interfaces/httpResponses/ILoginResponse";
import { UnauthorizedError } from "../../domain/exeptions/UnauthorizedError";
import { ILoginServices } from "../interfaces/services/ILoginServices";

export class LoginServicesImpl implements ILoginServices {
  constructor(private readonly _userRepository: IuserRepository) {}
  async validateDTO(email: string, password: string): Promise<void> {
    const newLogin = new LoginDTO(email, password);
    const loginToErros = await validate(newLogin);

    if (loginToErros.length > 0) {
      const firstError = loginToErros[0];
      const errorMerssage = Object.values(firstError.constraints!)[0];
      throw new BadRequestError(errorMerssage);
    }
    const user = await this._userRepository.findUserWhitEmail(email);
    if (!user) {
      throw new UnauthorizedError("Email ou senha incorretos");
    }
  }
  async checkPassword(password: string, user: IUser): Promise<void> {
    const passwordVerified = await bcrypt.compare(password, user.password);
    if (!passwordVerified) {
      throw new UnauthorizedError("Email ou senha incorretos");
    }
  }
  async userLogged(user: IUser): Promise<ILoginResponse> {
    const token = jwt.sign(
      { email: user.email },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1h",
      }
    );
    return {
      user: {
        id: user.id,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      token: token,
    };
  }
}
