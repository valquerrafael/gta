export class Teacher {
  id!: number;
  name: string | undefined;
  email: string | undefined;
  registration: string | undefined;

  constructor(name?: string, email?: string, registration?: string) {
    this.name = name;
    this.email = email;
    this.registration = registration;
  }
}
