import { UserDTO } from "../../dtos/userDTO";
import { IUser } from "../../interfaces/user/IUser";

export interface IUserUseCases {
  create(userDTO: UserDTO): Promise<IUser>;
  update(id: string, email?: string, password?: string): Promise<IUser>;
  delete(id: string): Promise<void>;
}
