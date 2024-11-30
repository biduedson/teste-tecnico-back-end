import { UserDTO } from "../../dtos/userDTO";
import { IuserRepository } from "../../interfaces/repositories/user/IUserRepository";
import { IUserUseCases } from "../../interfaces/useCaseImpl/user/IUserUseCases";
import { IUser } from "../../interfaces/user/IUser";

export class UserUseCaseImpl implements IUserUseCases {
  constructor(private readonly _repository: IuserRepository) {}

  async create(userDTO: UserDTO): Promise<IUser> {
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
    return this._repository.deleteUser(id);
  }
}
