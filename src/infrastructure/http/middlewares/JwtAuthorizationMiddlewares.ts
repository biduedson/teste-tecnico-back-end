import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload, TokenExpiredError } from "jsonwebtoken";
import { IHttpResponse } from "../../../aplication/interfaces/http/IHttpResponse";
import { TokenError } from "../../../domain/exeptions/TokenError";
import { httpErrorResponse } from "../../../utils/HttpErrorResponse";

export const JwtAuthorizationMiddlewares = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new TokenError("token não enviado");
    }

    if (!authorization.startsWith("Bearer ")) {
      throw new TokenError("Token inválido ou mal formatado");
    }

    try {
      const token = authorization.replace("Bearer ", "").trim();
      jwt.verify(token, String(process.env.JWT_SECRET));
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
