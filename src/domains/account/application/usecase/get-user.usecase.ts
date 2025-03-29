
import { OutputUserGetByIdDTO } from "../dto/user.dto";
import { GetUserByIdQuery } from "../queries/get-user-by-id.query";
import { IUserReaderRepository } from "../../core/repositories.types";
import { IUseCase } from "../../../../share/shared.interface";

export class GetUserUseCase implements IUseCase<OutputUserGetByIdDTO> {
    constructor(readonly repository: IUserReaderRepository) {
    }

    async execute(query: GetUserByIdQuery): Promise<OutputUserGetByIdDTO> {
        const user = await this.repository.get(query.userId);

        if(!user) {
            return {
                action: "USER_NOT_FOUND"
            }
        }

        return {
            action: "SUCCESS",
            data: {
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
            },
        }
    }
}