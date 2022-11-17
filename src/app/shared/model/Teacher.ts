export class Teacher {
  id?: string;
  name?: string | undefined;
  email?: string | undefined;
  registration?: string | undefined;

  constructor(teacher: Teacher = {}, id?: string) {
    this.name = teacher.name;
    this.email = teacher.email;
    this.registration = teacher.registration;
    this.id = id;
  }
}
