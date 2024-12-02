import { ILoginResponse } from "../httpResponses/ILoginResponse";
import { IUser } from "../user/IUser";

export interface ILoginServices {
  validateDTO(email: string, password: string): Promise<void>;
  userLogged(user: IUser): Promise<ILoginResponse>;
  checkPassword(password: string, user: IUser): Promise<void>;
}
