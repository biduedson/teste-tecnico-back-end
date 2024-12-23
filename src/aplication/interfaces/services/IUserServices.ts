import { UserDTO } from "../../dtos/userDTO";

export interface IUserServices {
  validateCreate(userDto: UserDTO): Promise<void>;
  encryptPassword(password: string): string;
}
