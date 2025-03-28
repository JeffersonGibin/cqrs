import { EmailVO } from "./email.vo";

export interface InputUser {
    name: string;
    email: string;
    status: "ACTIVE" | "INACTIVE" | "BLOCKED";
}

export class UserEntity {
    id: string;
    email: EmailVO;
    private props: InputUser;
    constructor(props: InputUser) {
        this.props = props;
        this.id = crypto.randomUUID().toString();
        this.email = EmailVO.create(props.email);
    }

    active() {
        if(this.props.status === "ACTIVE") {
            throw new Error("User is already active");
        }

        this.props.status = "ACTIVE";
    }

    inactive() {
        if(this.props.status === "INACTIVE") {
            throw new Error("User is already inactive");
        }

        this.props.status = "INACTIVE";
    }

    block() {
        if(this.props.status === "BLOCKED") {
            throw new Error("User is already blocked");
        }

        this.props.status = "BLOCKED";
    }

    static create(props: InputUser) {

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
