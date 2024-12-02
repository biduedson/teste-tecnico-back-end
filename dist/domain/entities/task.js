"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(id, title, description, status, userId, createdAt, updatedAt) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.userId = userId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    updateStatus(newStatus) {
        this.status = newStatus;
        this.updatedAt = new Date();
    }
    updateTask(title, description) {
        this.title = title;
        this.description = description;
        this.updatedAt = new Date();
    }
}
exports.Task = Task;
