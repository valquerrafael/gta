export class Teacher {
  teacherId?: number;
  cpf?: string;
  name?: string;
  password?: string;
  trails?: number[];

  constructor(
    teacherId: number,
    cpf: string,
    name: string,
    password: string,
    trails: number[]
  ) {
    this.teacherId = teacherId;
    this.cpf = cpf;
    this.name = name;
    this.password = password;
    this.trails = trails;
  }
}
