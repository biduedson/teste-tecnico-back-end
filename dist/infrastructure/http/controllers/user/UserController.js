"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const HttpErrorResponse_1 = require("../../../../utils/HttpErrorResponse");
class UserController {
    constructor(_userUseCases) {
        this._userUseCases = _userUseCases;
    }
    async create(httpRequest) {
        try {
            const user = await this._userUseCases.create(httpRequest.body);
            return {
                statusCode: 201,
                body: user,
            };
        }
        catch (error) {
            return (0, HttpErrorResponse_1.httpErrorResponse)(error);
        }
    }
}
exports.UserController = UserController;
