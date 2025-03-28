"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseMemory = void 0;
class DatabaseMemory {
    static instance;
    readDb;
    writeDb;
    constructor() {
        this.readDb = [];
        this.writeDb = [];
    }
    static getInstance() {
        if (!DatabaseMemory.instance) {
            DatabaseMemory.instance = new DatabaseMemory();
        }
        return DatabaseMemory.instance;
    }
    getWriteDb() {
        return this.writeDb;
    }
    getReadDb() {
        return this.readDb;
    }
    addWriteData(data) {
        this.writeDb.push(data);
    }
    addReadData(data) {
        this.readDb.push(data);
    }
    reset() {
        this.readDb.length = 0;
        this.writeDb.length = 0;
    }
}
exports.DatabaseMemory = DatabaseMemory;
