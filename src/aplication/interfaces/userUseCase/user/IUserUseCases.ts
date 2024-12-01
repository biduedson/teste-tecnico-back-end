import { UpdateUserDTO } from "../../../dtos/UpdateUserDTO";
import { UserDTO } from "../../../dtos/userDTO";
import { IUser } from "../../user/IUser";

export interface IUserUseCases {
  create(userDTO: UserDTO): Promise<Omit<IUser, "password">>;
  update(userUpdat: UpdateUserDTO): Promise<Omit<IUser, "password">>;
  delete(id: string): Promise<void>;
  users(): Promise<Omit<IUser, "password">[]>;
}
