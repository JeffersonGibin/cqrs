import { IRepository } from "../../../share/shared.interface";
import { UserEntity } from "./user.entity";


export interface IUserReaderRepository {
    get(id: string): Promise<UserEntity | null>;
    getByName(name: string): Promise<UserEntity | null>;
}

export interface IUserWriterRepository extends IRepository<UserEntity> {
    findByEmail(email: string): Promise<UserEntity | null> ;
}