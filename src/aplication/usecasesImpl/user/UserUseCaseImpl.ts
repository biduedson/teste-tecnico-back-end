import { UserDTO } from "../../dtos/userDTO";
import { IuserRepository } from "../../interfaces/repositories/user/IUserRepository";
import { IUserUseCases } from "../../interfaces/useCases/user/IUserUseCases";
import { IUser } from "../../interfaces/user/IUser";
import { IUserServices } from "../../interfaces/services/IUserServices";
import { AlreadyExistsError } from "../../../domain/exeptions/AlreadyExistsError";

export class UserUseCaseImpl implements IUserUseCases {
  constructor(
    private readonly _repository: IuserRepository,
    private readonly _userService: IUserServices
  ) {}

  async create(userDTO: UserDTO): Promise<Omit<IUser, "password">> {
    await this._userService.validateCreate(userDTO);
    const encryptPassword = this._userService.encryptPassword(userDTO.password);
    const newUser = await this._repository.createUser(
      userDTO.email,
      encryptPassword
    );
    console.log(encryptPassword);
    return newUser;
  }
}
