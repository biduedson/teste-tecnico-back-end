import { UserDTO } from "../../dtos/userDTO";

export interface IUserServices {
  validateCreate(userDto: UserDTO): Promise<void>;
  validateDelete(id: string): Promise<void>;
  //validateDelete(userDto: UserDTO): Promise<void>;
}
