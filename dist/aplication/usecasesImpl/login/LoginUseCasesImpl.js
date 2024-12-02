"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUseCasesImpl = void 0;
const NotFoundError_1 = require("../../../domain/exeptions/NotFoundError");
class LoginUseCasesImpl {
    constructor(_userRepository, _loginService) {
        this._userRepository = _userRepository;
        this._loginService = _loginService;
    }
    async login(email, password) {
        await this._loginService.validateDTO(email, password);
        const user = await this._userRepository.findUserWhitEmail(email);
        if (!user) {
            throw new NotFoundError_1.NotFoundError("Usuario não encontrado");
        }
        await this._loginService.checkPassword(password, user);
        return this._loginService.userLogged(user);
    }
}
exports.LoginUseCasesImpl = LoginUseCasesImpl;
