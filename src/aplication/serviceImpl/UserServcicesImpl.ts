import { validate } from "class-validator";
import { UserDTO } from "../dtos/userDTO";
import { BadRequestError } from "../../domain/exeptions/BadRequestError";
import { IUserServices } from "../interfaces/services/IUserServices";
import { IuserRepository } from "../interfaces/repositories/user/IUserRepository";
import { AlreadyExistsError } from "../../domain/exeptions/AlreadyExistsError";
import { DeleteUserDTO } from "../dtos/DeleteUserDTO";

export class UserServcicesImpl implements IUserServices {
  constructor(private readonly _repository: IuserRepository) {}

  async validateCreate(userDto: UserDTO): Promise<void> {
    if (userDto.password.length < 6) {
      throw new BadRequestError("O password deve ter pelo menos 6 caracteres.");
    }

    const user = new UserDTO(userDto.email, userDto.password);
    const userDtoErros = await validate(user);

    if (userDtoErros.length > 0) {
      const firstError = userDtoErros[0];
      const errorMerssage = Object.values(firstError.constraints!)[0];
      throw new BadRequestError(errorMerssage);
    }

    const userExisting = await this._repository.findUserWhitEmail(
      userDto.email
    );
    if (userExisting) {
      throw new AlreadyExistsError("Ja existe um usuario com este email.");
    }
  }

  async validateDelete(id: string): Promise<void> {
    const userExisting = await this._repository.findUser(id);
    if (!userExisting) {
      throw new AlreadyExistsError("Este usuario não existe.");
    }
    const userId = new DeleteUserDTO(id);
    const deleteUserDtoError = await validate(userId);

    if (deleteUserDtoError.length > 0) {
      const firstError = deleteUserDtoError[0];
      const errorMerssage = Object.values(firstError.constraints!)[0];
      throw new BadRequestError(errorMerssage);
    }
  }
}
