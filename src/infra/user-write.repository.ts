import { DatabaseMemory } from "./database-memory";
import { IUserWriterRepository as IUserWriteRepository } from "../domain/types/user.repository";
import { UserEntity } from "../domain/user.entity";


export class UserWriteRepository implements IUserWriteRepository {
    findByEmail(email: string): Promise<UserEntity | null> {
        const DatabaseMemoryWrite = DatabaseMemory.getInstance().getWriteDb();
        
        const user = DatabaseMemoryWrite.find((user: { email: string; }) => {
            if(!user) {
                return false
            }

            return  user.email === email;
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