import { validate } from "class-validator";
import { UserDTO } from "../dtos/userDTO";
import { IValidateDtos } from "../interfaces/services/IValidateDto";
import { BadRequestError } from "../../domain/exeptions/BadRequestError";

export class ValidateDtoImpl implements IValidateDtos {
  async user(userDto: UserDTO): Promise<void> {
    const userDtoErros = await validate(userDto);

    if (userDtoErros) {
      const firstError = userDtoErros[0];
      const errorMerssage = Object.values(firstError.constraints!)[0];
      throw new BadRequestError(errorMerssage);
    }
  }
}
