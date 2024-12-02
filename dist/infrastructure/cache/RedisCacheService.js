"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisCacheService = void 0;
const RedisClient_1 = __importDefault(require("./RedisClient"));
class RedisCacheService {
    async set(key, value, ttl) {
        await RedisClient_1.default.setex(key, ttl, value);
    }
    async get(key) {
        return await RedisClient_1.default.get(key);
    }
    async del(key) {
        await RedisClient_1.default.del(key);
    }
}
exports.redisCacheService = new RedisCacheService();
