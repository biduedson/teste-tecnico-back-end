import { User } from "@prisma/client";
import { IUser } from "../../user/IUser";

export interface IuserRepository {
  createUser(email: string, password: string): Promise<Omit<User, "password">>;
  updateUser(id: string, email?: string, passaword?: string): Promise<IUser>;
  deleteUser(id: string): Promise<void>;
  findUser(id: string): Promise<IUser | null>;
  findUserWhitEmail(email: string): Promise<IUser | null>;
}
