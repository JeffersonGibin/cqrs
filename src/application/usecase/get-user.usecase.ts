
import { IUserReaderRepository } from "../../domain/types/user.repository";
import { OutputUserGetByIdDTO } from "../dto/user.dto";
import { GetUserByIdQuery } from "../queries/get-user-by-id.query";


export class GetUserUseCase {
    constructor(readonly repository: IUserReaderRepository) {
    }

    async execute(query: GetUserByIdQuery): Promise<OutputUserGetByIdDTO> {
        console.log(query)
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