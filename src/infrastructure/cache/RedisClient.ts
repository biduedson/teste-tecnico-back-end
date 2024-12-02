import Redis from "ioredis";
import dotenv from "dotenv";
dotenv.config();

const redis = new Redis({
  host: process.env.REDIS_HOST || "localhost",
  port: Number(process.env.REDIS_PORT) || 6379,
});

redis.on("connect", () => {
  console.log("Conectado ao Redis");
});

redis.on("error", (err) => {
  console.error("Erro de conexão com o Redis:", err);
});

export default redis;
