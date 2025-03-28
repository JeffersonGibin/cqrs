"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = void 0;
const user_repository_1 = require("../../infra/user.repository");
const create_user_usecase_1 = require("../usecase/create-user.usecase");
const createUserController = () => {
    return async (req, res) => {
        try {
            const input = req.body;
            const createUserUseCase = new create_user_usecase_1.CreateUserUseCase({
                dto: input,
                repository: new user_repository_1.UserRepository(),
            });
            const result = await createUserUseCase.execute();
            return res.status(201).json(result);
        }
        catch (error) {
            return res.status(500).json(error.message);
        }
    };
};
exports.createUserController = createUserController;
