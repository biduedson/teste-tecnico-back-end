import { UserDTO } from "../../dtos/userDTO";

export interface IValidateDtos {
  user(userDto: UserDTO): Promise<void>;
}
