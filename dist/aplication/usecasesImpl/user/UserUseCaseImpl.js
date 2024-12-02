"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUseCaseImpl = void 0;
class UserUseCaseImpl {
    constructor(_repository, _userService) {
        this._repository = _repository;
        this._userService = _userService;
    }
    async create(userDTO) {
        await this._userService.validateCreate(userDTO);
        const encryptPassword = this._userService.encryptPassword(userDTO.password);
        const newUser = await this._repository.createUser(userDTO.email, encryptPassword);
        console.log(encryptPassword);
        return newUser;
    }
}
exports.UserUseCaseImpl = UserUseCaseImpl;
