import { DatabaseMemory } from "./infra/database-memory";


const DatabaseTools = {
    sync: () => {
        setInterval(() => {
            const DatabaseMemoryWrite = DatabaseMemory.getInstance().getWriteDb();
            const DatabaseMemoryRead = DatabaseMemory.getInstance().getReadDb();

            const data: any = DatabaseMemoryWrite.shift();
            if (data !== undefined) {
                const dataFound = DatabaseMemoryRead.find(
                    (user: { id: string; }) => user.id === data.id
                )

                if (!dataFound) {
                    DatabaseMemoryRead.push(data);
                }
            }
        }, 30)
    }
}



export {
    DatabaseMemory,
    DatabaseTools
}