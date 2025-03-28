
export interface OutputUserCreateDTO {
    action: string;
    data?: {
        id: string;
        name: string;
    }
}

export interface OutputUserGetByIdDTO {
    action: string;
    data?: {
        id: string;
        name: string;
        email: string;
    }
}