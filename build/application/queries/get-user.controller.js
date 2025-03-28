"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserController = void 0;
const user_read_repository_1 = require("../../infra/user-read.repository");
const get_user_by_id_query_1 = require("./get-user-by-id.query");
const get_user_usecase_1 = require("./get-user.usecase");
const getUserController = () => {
    return async (req, res) => {
        try {
            const input = req.params;
            const command = new get_user_by_id_query_1.GetUserByIdQuery(input.id);
            const repository = new user_read_repository_1.UserReadRepository();
            const getUserUseCase = new get_user_usecase_1.GetUserUseCase(repository);
            const result = await getUserUseCase.execute(command);
            if (result.action === "USER_NOT_FOUND") {
                return res.status(404).json({
                    message: "User not found",
                });
            }
            return res.status(200).json({
                message: "User found successfully",
                data: result.data
            });
        }
        catch (error) {
            return res.status(500).json(error.message);
        }
    };
};
exports.getUserController = getUserController;
