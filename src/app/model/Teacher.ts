export class Teacher {
  id!: number;
  name: string;
  registration: string;

  constructor(name: string, registration: string) {
    this.name = name;
    this.registration = registration;
  }
}
