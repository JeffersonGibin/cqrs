"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseTools = exports.DatabaseMemory = void 0;
const database_memory_1 = require("./infra/database-memory");
Object.defineProperty(exports, "DatabaseMemory", { enumerable: true, get: function () { return database_memory_1.DatabaseMemory; } });
const DatabaseTools = {
    sync: () => {
        setInterval(() => {
            const DatabaseMemoryWrite = database_memory_1.DatabaseMemory.getInstance().getWriteDb();
            const DatabaseMemoryRead = database_memory_1.DatabaseMemory.getInstance().getReadDb();
            const data = DatabaseMemoryWrite.shift();
            if (data !== undefined) {
                const dataFound = DatabaseMemoryRead.find((user) => user.id === data.id);
                if (!dataFound) {
                    DatabaseMemoryRead.push(data);
                }
            }
        }, 30);
    }
};
exports.DatabaseTools = DatabaseTools;
