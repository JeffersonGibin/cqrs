"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const email_vo_1 = require("./email.vo");
class UserEntity {
    id;
    email;
    props;
    constructor(props) {
        this.props = props;
        this.id = crypto.randomUUID().toString();
        this.email = email_vo_1.EmailVO.create(props.email);
    }
    active() {
        if (this.props.status === "ACTIVE") {
            throw new Error("User is already active");
        }
        this.props.status = "ACTIVE";
    }
    inactive() {
        if (this.props.status === "INACTIVE") {
            throw new Error("User is already inactive");
        }
        this.props.status = "INACTIVE";
    }
    block() {
        if (this.props.status === "BLOCKED") {
            throw new Error("User is already blocked");
        }
        this.props.status = "BLOCKED";
    }
    static create(props) {
        return new UserEntity({
            name: props.name,
            email: props.email,
            status: "ACTIVE",
        });
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.props.name;
    }
    getEmail() {
        return this.email.get();
    }
    getStatus() {
        return this.props.status;
    }
}
exports.UserEntity = UserEntity;
