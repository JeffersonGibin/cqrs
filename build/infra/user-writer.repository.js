"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWriterRepository = exports.Memory = void 0;
exports.Memory = [];
class UserWriterRepository {
    async save(user) {
        exports.Memory.push({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            status: user.getStatus()
        });
    }
}
exports.UserWriterRepository = UserWriterRepository;
