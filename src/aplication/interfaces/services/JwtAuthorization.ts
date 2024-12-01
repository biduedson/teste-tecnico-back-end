import { NextFunction } from "express";
import { IHttpRequest } from "../http/IHttpRequest";

export interface IJwtAuthorization {
  jwtAutorization(
    httpRequest: IHttpRequest<{ header: { authorization: string } }>,
    next: NextFunction
  ): Promise<void>;
}
