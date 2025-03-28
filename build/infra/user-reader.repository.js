"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWriteRepository = exports.Memory = void 0;
const user_entity_1 = require("../domain/user.entity");
exports.Memory = [];
class UserWriteRepository {
    async getByName(name) {
        const user = exports.Memory.find(user => user.name === name);
        if (!user) {
            return null;
        }
        return new user_entity_1.UserEntity({
            name: user.name,
            email: user.email,
            status: user.status
        });
    }
    async get(id) {
        const user = exports.Memory.find(user => user.id === id);
        if (!user) {
            return null;
        }
        return new user_entity_1.UserEntity({
            name: user.name,
            email: user.email,
            status: user.status
        });
    }
}
exports.UserWriteRepository = UserWriteRepository;
