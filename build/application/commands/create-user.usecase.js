"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const user_entity_1 = require("../../domain/user.entity");
class CreateUserUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(command) {
        const user = await this.repository.findByEmail(command.email);
        if (user?.id !== undefined) {
            return {
                action: "USER_ALREADY_EXISTS",
                data: {
                    id: user.getId(),
                    name: user.getName(),
                },
            };
        }
        const userEntity = user_entity_1.UserEntity.create({
            name: command.name,
            email: command.email,
            status: "ACTIVE",
        });
        if (!userEntity.email.isCorporative()) {
            return {
                action: "EMAIL_NOT_CORPORATIVE"
            };
        }
        await this.repository.save(userEntity);
        return {
            action: "USER_CREATED",
            data: {
                id: userEntity.getId(),
                name: userEntity.getName(),
            },
        };
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
