import { IHttpResponse } from "../aplication/interfaces/http/IHttpResponse";
import { AlreadyExistsError } from "../domain/exeptions/AlreadyExistsError";
import { BadRequestError } from "../domain/exeptions/BadRequestError";
import { NotFoundError } from "../domain/exeptions/NotFoundError";

export const errorHandlerUtils = (error: Error): IHttpResponse<any> => {
  if (
    error instanceof AlreadyExistsError ||
    error instanceof BadRequestError ||
    error instanceof NotFoundError ||
    error instanceof AlreadyExistsError
  ) {
    return {
      statusCode: error.statusCode,
      body: error.message,
    };
  }
  return {
    statusCode: 500,
    body: `Erro interno do servidor, erro: ${error}`,
  };
};
