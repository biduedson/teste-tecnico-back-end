import { User } from "@prisma/client";
import { IUser } from "../../user/IUser";

export interface IuserRepository {
  users(): Promise<Omit<IUser, "password">[]>;
  createUser(email: string, password: string): Promise<Omit<User, "password">>;
  updateUser(
    id: string,
    email?: string,
    passaword?: string
  ): Promise<Omit<IUser, "password">>;
  deleteUser(id: string): Promise<void>;
  findUser(id: string): Promise<IUser | null>;
  findUserWhitEmail(email: string): Promise<IUser | null>;
}
