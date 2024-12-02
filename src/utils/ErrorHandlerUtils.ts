import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import { IHttpResponse } from "../aplication/interfaces/http/IHttpResponse";
import { AlreadyExistsError } from "../domain/exeptions/AlreadyExistsError";
import { BadRequestError } from "../domain/exeptions/BadRequestError";
import { NotFoundError } from "../domain/exeptions/NotFoundError";
import { TokenError } from "../domain/exeptions/TokenError";
import { UnauthorizedError } from "../domain/exeptions/UnauthorizedError";

export const errorHandlerUtils = (error: Error): IHttpResponse<any> => {
  if (
    error instanceof AlreadyExistsError ||
    error instanceof BadRequestError ||
    error instanceof NotFoundError ||
    error instanceof AlreadyExistsError ||
    error instanceof TokenError ||
    error instanceof UnauthorizedError
  ) {
    return {
      statusCode: error.statusCode,
      body: error.message,
    };
  }
  if (error instanceof TokenExpiredError) {
    return {
      statusCode: 401,
      body: "Token expirado",
    };
  }
  if (error instanceof JsonWebTokenError) {
    return {
      statusCode: 401,
      body: "Token inválido ou malformado",
    };
  }
  return {
    statusCode: 500,
    body: `Erro interno do servidor, erro: ${error}`,
  };
};
