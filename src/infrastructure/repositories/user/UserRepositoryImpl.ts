import { User } from "@prisma/client";
import { IuserRepository } from "../../../aplication/interfaces/repositories/user/IUserRepository";
import { IUser } from "../../../aplication/interfaces/user/IUser";
import { prisma } from "../../database/client";

export class UserRepositoryImpl implements IuserRepository {
  async users(): Promise<Omit<IUser, "password">[]> {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return users;
  }
  async createUser(
    email: string,
    password: string
  ): Promise<Omit<User, "password">> {
    const newUser = await prisma.user.create({
      data: {
        email: email,
        password: password,
      },
      select: {
        id: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return newUser;
  }

  async updateUser(
    id: string,
    email?: string,
    passaword?: string
  ): Promise<Omit<IUser, "password">> {
    const userUpdated = await prisma.user.update({
      where: { id },
      data: {
        email: email,
        password: passaword,
      },
      select: {
        id: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return userUpdated;
  }

  async deleteUser(id: string): Promise<void> {
    await prisma.user.delete({ where: { id } });
  }

  async findUser(id: string): Promise<IUser | null> {
    const user = await prisma.user.findUnique({ where: { id } });
    return user;
  }

  async findUserWhitEmail(email: string): Promise<IUser | null> {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  }
}
