import { User } from "./User";

export class Institution {
  id!: number;
  name: string;
  cnpj: string;
  password: string;
  teachers: User[] = [];
  students: User[] = [];

  constructor(name: string, cnpj: string, password: string) {
    this.name = name;
    this.cnpj = cnpj;
    this.password = password;
  }
}
