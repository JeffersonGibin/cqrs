export class Entity {
    protected id: string;

    constructor() {
        this.id = crypto.randomUUID().toString();
    }
}