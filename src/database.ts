import { DatabaseMemory } from "./domains/account/infrastructure/database-memory";

const DatabaseTools = {
    syncWithInstanceRead: () => {
        const db = DatabaseMemory.getInstance();

        setInterval(() => {
            const writeDb = db.getWriteDb();
            const readDb = db.getReadDb();


            for (const item of writeDb) {
                const exists = readDb.find((readItem: { id: string }) => readItem.id === item.id);
                if (!exists) {
                    console.log("[DatabaseTools] Sync with readDb!", item.id);
                    DatabaseMemory.getInstance().addReadData(item);
                }
            }
        }, 30);
    },
};

export {
    DatabaseTools
};
