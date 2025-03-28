import { UserReadRepository } from "../../infra/user-read.repository";
import { GetUserByIdQuery } from "./get-user-by-id.query"
import { GetUserUseCase } from "./get-user.usecase";

export const getUserController = () => {
    return async (req: any, res: any) => {
        
        try {
            const input = req.params;
            const command = new GetUserByIdQuery(input.id);
            const repository = new UserReadRepository();
            const getUserUseCase = new GetUserUseCase(repository);

            const result = await getUserUseCase.execute(command);

            if(result.action === "USER_NOT_FOUND") {
                return res.status(404).json({
                    message: "User not found",
                });
            }

            return res.status(200).json({
                message: "User found successfully",
                data: result.data
            })

        } catch (error: any) {
            return res.status(500).json(error.message);
        }
    }
}