import { DatabaseMemory } from "../database";
import { IUserReaderRepository } from "../domain/types/user.repository";
import { UserEntity } from "../domain/user.entity";

export class UserReadRepository implements IUserReaderRepository {
    async getByName(name: string): Promise<UserEntity | null> {
        const DatabaseMemoryRead = DatabaseMemory.getInstance().getReadDb();
        const user = DatabaseMemoryRead.find((user: { name: string; }) => user.name === name);
        if(!user) { 
            return null;
        }
        
        return new UserEntity({
            name: user.name,
            email: user.email,
            status: user.status
        });
    }
    
    async get(id: string): Promise<UserEntity | null> {
        const DatabaseMemoryRead = DatabaseMemory.getInstance().getReadDb();
        const user = DatabaseMemoryRead.find((user: { id: string; }) => user.id === id);
      
        if(user === undefined) {
            return null;
        }
        
        return new UserEntity({
            name: user.name,
            email: user.email,
            status: user.status
        });
    }
}