import redis from "./RedisClient";

class RedisCacheService {
  async set(key: string, value: string, ttl: number): Promise<void> {
    await redis.setex(key, ttl, value);
  }

  async get(key: string): Promise<string | null> {
    return await redis.get(key);
  }

  async del(key: string): Promise<void> {
    await redis.del(key);
  }
}

export const redisCacheService = new RedisCacheService();
