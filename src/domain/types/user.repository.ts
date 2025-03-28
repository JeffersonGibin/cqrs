import { UserEntity } from "../user.entity";

export interface IUserReaderRepository {
    get(id: string): Promise<UserEntity | null>;
    getByName(name: string): Promise<UserEntity | null>;
}

export interface IUserWriterRepository {
    save(user: UserEntity): Promise<void>;
    findByEmail(email: string): Promise<UserEntity | null> ;
}