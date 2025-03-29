import { DatabaseMemory } from "./database-memory";
import { IUserWriterRepository as IUserWriteRepository } from "../core/repositories.types";
import { UserEntity } from "../core/user.entity";
import { IRepository } from "../../../share/shared.interface";


export class UserWriteRepository implements IUserWriteRepository {
    get(data: UserEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(data: UserEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(data: UserEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }

    findByEmail(email: string): Promise<UserEntity | null> {
        const DatabaseMemoryWrite = DatabaseMemory.getInstance().getWriteDb();

        const user = DatabaseMemoryWrite.find((user: { email: string; }) => {
            if (!user) {
                return false
            }

            return user.email === email;
        });


        if (!user) {
            return new Promise((resolve, reject) => {
                resolve(null);
            });
        }

        return new Promise((resolve, reject) => {
            resolve(new UserEntity({
                name: user.name,
                email: user.email,
                status: user.status
            }));
        });
    }
    async save(user: UserEntity): Promise<void> {

        DatabaseMemory.getInstance().addWriteData({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            status: user.getStatus()
        });
    }
}