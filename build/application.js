"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./presentation/routes"));
const database_1 = require("./database");
const Application = () => {
    return {
        run: async () => {
            const app = (0, express_1.default)();
            app.use(express_1.default.json());
            app.use('/', routes_1.default);
            // Sincroniza os dados para a simulação do outro banco
            database_1.DatabaseTools.sync();
            app.listen(3000, () => {
                console.log('Server running on http://localhost:3000');
            });
        }
    };
};
exports.Application = Application;
