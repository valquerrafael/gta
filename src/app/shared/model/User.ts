import { Role } from "../Util";
import { Trail } from "./Trail";

export class User {
  id!: number;
  name: string;
  email: string;
  role: Role;
  trails: Trail[] = [];

  constructor(name: string, email: string, role: Role) {
    this.name = name;
    this.email = email;
    this.role = role;
  }
}
