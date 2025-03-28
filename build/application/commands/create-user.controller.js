"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = void 0;
const user_write_repository_1 = require("../../infra/user-write.repository");
const create_user_command_1 = require("./create-user.command");
const create_user_usecase_1 = require("./create-user.usecase");
const createUserController = () => {
    return async (req, res) => {
        try {
            const input = req.body;
            const command = new create_user_command_1.CreateUserCommand(input.name, input.email);
            const repository = new user_write_repository_1.UserWriteRepository();
            const createUserUseCase = new create_user_usecase_1.CreateUserUseCase(repository);
            const result = await createUserUseCase.execute(command);
            if (result.action === "USER_ALREADY_EXISTS") {
                res.status(409).json({
                    message: "User already exists",
                });
                return;
            }
            if (result.action === "EMAIL_NOT_CORPORATIVE") {
                res.status(409).json({
                    message: "Email not corporative",
                });
                return;
            }
            return res.status(201).json({
                message: "User created successfully",
                data: result.data
            });
        }
        catch (error) {
            return res.status(500).json(error.message);
        }
    };
};
exports.createUserController = createUserController;
