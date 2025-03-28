export class DatabaseMemory {
    private static instance: DatabaseMemory;

    private readDb: any[];
    private writeDb: any[];

    private constructor() {
        this.readDb = [];
        this.writeDb = [];
    }

    static getInstance(): DatabaseMemory {
        if (!DatabaseMemory.instance) {
            DatabaseMemory.instance = new DatabaseMemory();
        }
        return DatabaseMemory.instance;
    }

    getWriteDb(): any[] {
        return this.writeDb;
    }

    getReadDb(): any[] {
        return this.readDb;
    }

    addWriteData(data: any): void {
        this.writeDb.push(data);
    }

    addReadData(data: any): void {
        this.readDb.push(data);
    }

    reset(): void {
        this.readDb.length = 0;
        this.writeDb.length = 0;
    }
}