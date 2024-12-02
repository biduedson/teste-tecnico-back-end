import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload, TokenExpiredError } from "jsonwebtoken";
import { IHttpResponse } from "../../../aplication/interfaces/http/IHttpResponse";
import { TokenError } from "../../../domain/exeptions/TokenError";
import { httpErrorResponse } from "../../../utils/HttpErrorResponse";
import { redisCacheService } from "../../cache/RedisCacheService";

export const JwtAuthorizationMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new TokenError("token não enviado");
    }

    try {
      const token = authorization.replace("Bearer ", "").trim();
      const decoded = jwt.verify(
        token,
        String(process.env.JWT_SECRET)
      ) as JwtPayload;

      const email = decoded.email;

      const redisToken = await redisCacheService.get(`auth_token:${email}`);

      if (!redisToken) {
        throw new TokenError(
          "Token não encontrado no cache. Faça login novamente."
        );
      }

      next();
    } catch (error) {
      const { body, statusCode } = httpErrorResponse(error as Error);
      return res.status(statusCode).json(body);
    }
  } catch (error) {
    const { body, statusCode } = httpErrorResponse(error as Error);
    return res.status(statusCode).json(body);
  }
};
