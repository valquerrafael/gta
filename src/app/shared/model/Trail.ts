import { User } from "./User";

export class Trail {
    id!: number;
    name: string;
    description: string;
    teacher: User;
    students: User[] = [];

    constructor(name: string, description: string, teacher: User) {
        this.name = name;
        this.description = description;
        this.teacher = teacher;
    }
}
