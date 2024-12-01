import { UpdateUserDTO } from "../../dtos/UpdateUserDTO";
import { UserDTO } from "../../dtos/userDTO";

export interface IUserServices {
  validateCreate(userDto: UserDTO): Promise<void>;
  validateDelete(id: string): Promise<void>;
  validateUpdate(updatedUser: UpdateUserDTO): Promise<void>;
}
