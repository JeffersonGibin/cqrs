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
    writeDb.push(data);
    console.log(writeDb)
  }

  addReadData(data: any): void {
    readDb.push(data);
  }
}
