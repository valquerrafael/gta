export class Student {
  studentId?: number;
  cpf?: string;
  name?: string;
  password?: string;
  score?: number;
  trailsIds?: number[];

  constructor(
    studentId: number,
    cpf: string,
    name: string,
    password: string,
    score: number,
    trailsIds: number[]
  ) {
    this.studentId = studentId;
    this.cpf = cpf;
    this.name = name;
    this.password = password;
    this.score = score;
    this.trailsIds = trailsIds;
  }
}
