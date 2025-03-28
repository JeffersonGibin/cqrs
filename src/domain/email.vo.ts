export class EmailVO {
    constructor(readonly value: string) {}

    isCorporative(): boolean {
        return this.value.endsWith('@coporative.com.br');
    }

    get(): string {
        return this.value;
    }

    static create(email: string): EmailVO {
        return new EmailVO(email);
    }
}