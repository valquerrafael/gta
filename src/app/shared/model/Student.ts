export class Student {
  studentId?: number;
  cpf?: string;
  name?: string;
  password?: string;
  score?: number;
  trails?: number[];

  constructor(
    studentId: number,
    cpf: string,
    name: string,
    password: string,
    score: number,
    trails: number[]
  ) {
    this.studentId = studentId;
    this.cpf = cpf;
    this.name = name;
    this.password = password;
    this.score = score;
    this.trails = trails;
  }
}
