import { IHttpResponse } from "../aplication/interfaces/http/IHttpResponse";
import { errorHandlerUtils } from "./ErrorHandlerUtils";

export const httpErrorResponse = (error: Error): IHttpResponse<any> => {
  const { statusCode, body } = errorHandlerUtils(error as Error);
  return {
    statusCode,
    body,
  };
};
