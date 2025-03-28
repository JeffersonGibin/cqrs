"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const email_vo_1 = require("../../domain/email.vo");
const user_entity_1 = require("../../domain/user.entity");
class CreateUserUseCase {
    input;
    constructor(input) {
        this.input = input;
    }
    async execute() {
        const userEntity = user_entity_1.UserEntity.create({
            name: this.input.dto.name,
            email: email_vo_1.EmailVO.create(this.input.dto.email),
            status: "ACTIVE",
        });
        const user = await this.input.repository.getByName(userEntity.getName());
        if (user) {
            throw new Error("User already exists");
        }
        await this.input.repository.save(userEntity);
        return {
            message: "User created successfully",
            data: {
                id: userEntity.getId(),
                name: userEntity.getName(),
            },
        };
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
