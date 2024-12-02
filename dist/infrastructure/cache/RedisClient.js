"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const redisUrl = process.env.REDIS_URL;
if (!redisUrl) {
    console.error("A URL do Redis não foi definida!");
    process.exit(1);
}
const redis = new ioredis_1.default(redisUrl);
redis.on("connect", () => {
    console.log("Conectado ao Redis");
});
redis.on("error", (err) => {
    console.error("Erro de conexão com o Redis:", err);
});
exports.default = redis;
