"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logincontroller = void 0;
const HttpErrorResponse_1 = require("../../../../utils/HttpErrorResponse");
class Logincontroller {
    constructor(_loginUseCases) {
        this._loginUseCases = _loginUseCases;
    }
    async login(httpRequest) {
        const { body } = httpRequest;
        try {
            const userLogged = await this._loginUseCases.login(body?.email, body?.password);
            return {
                statusCode: 200,
                body: userLogged,
            };
        }
        catch (error) {
            return (0, HttpErrorResponse_1.httpErrorResponse)(error);
        }
    }
}
exports.Logincontroller = Logincontroller;
