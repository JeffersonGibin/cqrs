"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserReadRepository = void 0;
const database_1 = require("../database");
const user_entity_1 = require("../domain/user.entity");
class UserReadRepository {
    async getByName(name) {
        const DatabaseMemoryRead = database_1.DatabaseMemory.getInstance().getReadDb();
        const user = DatabaseMemoryRead.find((user) => user.name === name);
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
        const DatabaseMemoryRead = database_1.DatabaseMemory.getInstance().getReadDb();
        const user = DatabaseMemoryRead.find((user) => user.id === id);
        if (user === undefined) {
            return null;
        }
        return new user_entity_1.UserEntity({
            name: user.name,
            email: user.email,
            status: user.status
        });
    }
}
exports.UserReadRepository = UserReadRepository;
