import { UserDTO } from "../../dtos/userDTO";
import { IuserRepository } from "../../interfaces/repositories/user/IUserRepository";
import { IUserUseCases } from "../../userUseCase/user/IUserUseCases";
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
    const newUser = await this._repository.createUser(
      userDTO.email,
      userDTO.password
    );

    return newUser;
  }

  async update(id: string, email?: string, password?: string): Promise<IUser> {
    const userUpdated = await this._repository.updateUser(id, email, password);
    return userUpdated;
  }

  delete(id: string): Promise<void> {
    this._userService.validateDelete(id);
    return this._repository.deleteUser(id);
  }
}
