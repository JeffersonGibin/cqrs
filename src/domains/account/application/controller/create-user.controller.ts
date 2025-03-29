
import { UserWriteRepository } from "../../infrastructure/user-write.repository";
import { CreateUserCommand } from "../commands/create-user.command";
import { CreateUserUseCase } from "../usecase/create-user.usecase";

export const createUserController = () => {
    return async (req: any, res: any) => {
        
        try {
            const input = req.body;
            const command = new CreateUserCommand(input.name, input.email);
            const repository = new UserWriteRepository();
            const createUserUseCase = new CreateUserUseCase(repository);

            const result = await createUserUseCase.execute(command);

            if(result.action === "USER_ALREADY_EXISTS") {
                res.status(409).json({
                    message: "User already exists",
                });

                return;
            }

            if(result.action === "EMAIL_NOT_CORPORATIVE") {
                res.status(409).json({
                    message: "Email not corporative",
                });

                return;
            }

            return res.status(201).json({
                message: "User created successfully",
                data: result.data
            });
        } catch (error: any) {
            return res.status(500).json(error.message);
        }
    }
}