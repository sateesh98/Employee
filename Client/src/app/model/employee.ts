export interface IEmployee {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    created: Date;
    updated: Date;
}


export class Employee {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    // created: Date;
    // updated: Date;
}

export interface IUser {
    userName: string;
    password: string;
    isAdmin: boolean;
}
