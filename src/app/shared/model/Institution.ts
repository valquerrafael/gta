import { User } from "./User";

export class Institution {
  id!: number;
  name: string;
  teachers: User[] = [];
  students: User[] = [];

  constructor(name: string) {
    this.name = name;
  }
}
