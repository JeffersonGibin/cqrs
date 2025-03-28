"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserUseCase = void 0;
class GetUserUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(query) {
        console.log(query);
        const user = await this.repository.get(query.userId);
        if (!user) {
            return {
                action: "USER_NOT_FOUND"
            };
        }
        return {
            action: "SUCCESS",
            data: {
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
            },
        };
    }
}
exports.GetUserUseCase = GetUserUseCase;
