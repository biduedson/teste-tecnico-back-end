import { UserDTO } from "../../../dtos/userDTO";
import { IUser } from "../../user/IUser";

export interface IUserUseCases {
  create(userDTO: UserDTO): Promise<Omit<IUser, "password">>;
}
