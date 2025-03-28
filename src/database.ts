import { DatabaseMemory } from "./infra/database-memory";

const DatabaseTools = {
    syncWithInstanceRead: () => {
        const db = DatabaseMemory.getInstance();

        setInterval(() => {
            const writeDb = db.getWriteDb();
            const readDb = db.getReadDb();


            for (const item of writeDb) {
                const exists = readDb.find((readItem: { id: string }) => readItem.id === item.id);
                if (!exists) {
                    readDb.push(item);
                }
            }
        }, 30);
    },
};

export {
    DatabaseTools
};
