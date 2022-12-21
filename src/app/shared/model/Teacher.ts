export class Teacher {
  teacherId?: number;
  cpf?: string;
  name?: string;
  password?: string;
  trailsIds?: number[];

  constructor(
    teacherId: number,
    cpf: string,
    name: string,
    password: string,
    trailsIds: number[]
  ) {
    this.teacherId = teacherId;
    this.cpf = cpf;
    this.name = name;
    this.password = password;
    this.trailsIds = trailsIds;
  }
}
