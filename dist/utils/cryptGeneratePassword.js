"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const encryptPassword = (password) => {
    const passwordBcrypt = bcrypt_1.default.hashSync(password, 10);
    return passwordBcrypt;
};
