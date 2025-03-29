import { UserEntity } from "../../core/user.entity";
import { OutputUserCreateDTO } from "../dto/user.dto";
import { CreateUserCommand } from "../commands/create-user.command";
import { IUserWriterRepository } from "../../core/repositories.types";

export class CreateUserUseCase {
    constructor(readonly repository: IUserWriterRepository) {
    }
    async execute(command: CreateUserCommand): Promise<OutputUserCreateDTO> {
        const user = await this.repository.findByEmail(command.email);
        
        if (user?.getId() !== undefined) {
            return {
                action: "USER_ALREADY_EXISTS",
                data: {
                    id: user.getId(),
                    name: user.getName(),
                },
            }
        }

        const userEntity = UserEntity.create({
            name: command.name,
            email: command.email,
            status: "ACTIVE",
        });

        if(!userEntity.email.isCorporative()) {
            return {
                action: "EMAIL_NOT_CORPORATIVE"
            }
        }

        await this.repository.save(userEntity);

        return {
            action: "USER_CREATED",
            data: {
                id: userEntity.getId(),
                name: userEntity.getName(),
            },
        }
    }
}