"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpErrorResponse = void 0;
const ErrorHandlerUtils_1 = require("./ErrorHandlerUtils");
const httpErrorResponse = (error) => {
    const { statusCode, body } = (0, ErrorHandlerUtils_1.errorHandlerUtils)(error);
    return {
        statusCode,
        body,
    };
};
exports.httpErrorResponse = httpErrorResponse;
