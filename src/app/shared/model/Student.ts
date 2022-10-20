export class Student {
  id!: number;
  name: string;
  email: string;
  registration: string;

  constructor(name: string, email: string, registration: string) {
    this.name = name;
    this.email = email;
    this.registration = registration;
  }
}
