"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, email, password, createdAt, updatedAt) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    user(id, email, password, createdAt, updatedAt) {
        this.id = id;
        this.email = email;
        this.password = password;
        createdAt = createdAt;
        updatedAt = updatedAt;
    }
    getpassword() {
        return this.password;
    }
}
exports.User = User;
