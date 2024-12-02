"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryImpl = void 0;
const client_1 = require("../../database/client");
class UserRepositoryImpl {
    async users() {
        const users = await client_1.prisma.user.findMany({
            select: {
                id: true,
                email: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        return users;
    }
    async createUser(email, password) {
        const newUser = await client_1.prisma.user.create({
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
    async updateUser(id, email, passaword) {
        const userUpdated = await client_1.prisma.user.update({
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
    async deleteUser(id) {
        await client_1.prisma.user.delete({ where: { id } });
    }
    async findUser(id) {
        const user = await client_1.prisma.user.findUnique({ where: { id } });
        return user;
    }
    async findUserWhitEmail(email) {
        const user = await client_1.prisma.user.findUnique({ where: { email } });
        return user;
    }
}
exports.UserRepositoryImpl = UserRepositoryImpl;
