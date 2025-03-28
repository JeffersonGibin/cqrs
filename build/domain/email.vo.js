"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailVO = void 0;
class EmailVO {
    value;
    constructor(value) {
        this.value = value;
    }
    isCorporative() {
        return this.value.endsWith('@coporative.com.br');
    }
    get() {
        return this.value;
    }
    static create(email) {
        return new EmailVO(email);
    }
}
exports.EmailVO = EmailVO;
