import { EmailVO } from "../../domain/email.vo";
import { IUserWriterRepository } from "../../domain/types/user.repository";
import { UserEntity } from "../../domain/user.entity";
import { CreateUserCommand } from "../commands/create-user.command";
import { OutputUserCreateDTO } from "../dto/user.dto";

export class CreateUserUseCase {
    constructor(readonly repository: IUserWriterRepository) {
    }
    async execute(command: CreateUserCommand): Promise<OutputUserCreateDTO> {
        const user = await this.repository.findByEmail(command.email);
        
        if (user?.id !== undefined) {
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