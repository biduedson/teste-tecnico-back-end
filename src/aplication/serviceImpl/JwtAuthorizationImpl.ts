import { NextFunction } from "express";
import { TokenError } from "../../domain/exeptions/TokenError";
import { IHttpRequest } from "../interfaces/http/IHttpRequest";
import { IJwtAuthorization } from "../interfaces/services/JwtAuthorization";
import jwt, { JwtPayload, TokenExpiredError } from "jsonwebtoken";

export class JwtAuthorizationImpl implements IJwtAuthorization {
  async jwtAutorization(
    httpRequest: IHttpRequest<{ header: { authorization: string } }>,
    next: NextFunction
  ): Promise<void> {
    const { authorization } = httpRequest.header;
    if (!authorization) {
      throw new TokenError("token não enviado");
    }

    if (!authorization.startsWith("Bearer ")) {
      throw new TokenError("Token inválido ou mal formatado");
    }

    const token = authorization.replace("Bearer ", "").trim();
    try {
      jwt.verify(token, String(process.env.JWT_SECRET));
      next();
    } catch (error) {
      throw new TokenError("token invalido ou expirado.");
    }
  }
}
