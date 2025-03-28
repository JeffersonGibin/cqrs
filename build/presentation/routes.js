"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const create_user_controller_1 = require("../application/commands/create-user.controller");
const get_user_controller_1 = require("../application/queries/get-user.controller");
const router = express_1.default.Router();
router.post('/users', (0, create_user_controller_1.createUserController)());
router.get('/users/:id', (0, get_user_controller_1.getUserController)());
exports.default = router;
