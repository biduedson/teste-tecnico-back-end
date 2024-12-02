"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepositoryImpl = void 0;
const client_1 = require("../../database/client");
class TaskRepositoryImpl {
    async tasks() {
        const tasks = await client_1.prisma.task.findMany({
            include: {
                user: true,
            },
        });
        return tasks;
    }
    async create(task) {
        const newTask = await client_1.prisma.task.create({ data: task });
        return newTask;
    }
    async updateStatus(id, status) {
        const task = await client_1.prisma.task.update({
            where: { id },
            data: {
                status,
            },
        });
        return task;
    }
    async delete(id) {
        await client_1.prisma.task.delete({ where: { id } });
    }
    async findTask(id) {
        const task = await client_1.prisma.task.findUnique({ where: { id } });
        return task;
    }
}
exports.TaskRepositoryImpl = TaskRepositoryImpl;
