"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const UserRoutes_1 = require("./routes/UserRoutes");
const TaskRoutes_1 = require("./routes/TaskRoutes");
const LoginRoutes_1 = require("./routes/LoginRoutes");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", LoginRoutes_1.loginRoutes);
app.use("/api", UserRoutes_1.userRoutes);
app.use("/api", TaskRoutes_1.taskRoutes);
exports.default = app;
