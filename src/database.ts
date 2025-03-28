import { DatabaseMemory } from "./infra/database-memory";

const DatabaseTools = {
  sync: () => {
    const db = DatabaseMemory.getInstance(); // 👈 garantir instância única

    setInterval(() => {
      const writeDb = db.getWriteDb();
      const readDb = db.getReadDb();

      const data = writeDb.shift();

      if (data !== undefined) {
        const exists = readDb.find((item: { id: string }) => item.id === data.id);
        if (!exists) {
          readDb.push(data); // ou use db.addReadData(data);
        }
      }
    }, 30);
  },
};

export {
  DatabaseMemory,
  DatabaseTools
};
