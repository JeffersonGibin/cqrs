"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWriteRepository = void 0;
const database_1 = require("../database");
const user_entity_1 = require("../domain/user.entity");
class UserWriteRepository {
    findByEmail(email) {
        const DatabaseMemoryWrite = database_1.DatabaseMemory.getInstance().getWriteDb();
        const user = DatabaseMemoryWrite.find((user) => {
            if (!user) {
                return false;
            }
            return user.email === email;
        });
        if (!user) {
            return new Promise((resolve, reject) => {
                resolve(null);
            });
        }
        return new Promise((resolve, reject) => {
            resolve(new user_entity_1.UserEntity({
                name: user.name,
                email: user.email,
                status: user.status
            }));
        });
    }
    async save(user) {
        database_1.DatabaseMemory.getInstance().addWriteData({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            status: user.getStatus()
        });
    }
}
exports.UserWriteRepository = UserWriteRepository;
