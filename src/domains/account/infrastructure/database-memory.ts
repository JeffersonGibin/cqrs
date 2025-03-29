// ⬇️ Esses arrays vivem no escopo do módulo e são sempre os mesmos
const writeDb: any[] = [];
const readDb: any[] = [];

export class DatabaseMemory {
  private static instance: DatabaseMemory;

  private constructor() {
    console.log('[DatabaseMemory] Memory is live!');
  }

  static getInstance(): DatabaseMemory {
    if (!DatabaseMemory.instance) {
      DatabaseMemory.instance = new DatabaseMemory();
    }
    return DatabaseMemory.instance;
  }

  getWriteDb(): any[] {
    return writeDb;
  }

  getReadDb(): any[] {
    return readDb;
  }

  addWriteData(data: any): void {
    console.log("[DatabaseMemory] Data saved on writeDb!", data.id);
    writeDb.push(data);
  }

  addReadData(data: any): void {
    console.log("[DatabaseMemory] Data saved on readDb!", data.id);
    readDb.push(data);
  }
}
