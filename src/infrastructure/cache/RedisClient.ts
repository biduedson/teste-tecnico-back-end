import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

const redisUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REDIS_URL
    : process.env.REDIS_URL_DEVELOPMENT;

if (!redisUrl) {
  console.error("A URL do Redis não foi definida!");
  process.exit(1);
}

const redis = new Redis(redisUrl);

redis.on("connect", () => {
  console.log("Conectado ao Redis");
});

redis.on("error", (err) => {
  console.error("Erro de conexão com o Redis:", err);
});

export default redis;
