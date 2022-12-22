import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Student } from 'src/app/shared/model/Student';
import { Teacher } from 'src/app/shared/model/Teacher';
import { Trail } from 'src/app/shared/model/Trail';
import { StudentService } from 'src/app/shared/services/student.service';
import { TeacherService } from 'src/app/shared/services/teacher.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  entities = ['Student', 'Teacher'];
  selectedEntity = '';

  student: Student = {
    studentId: 0,
    cpf: '',
    name: '',
    password: '',
    score: 0,
    trailsIds: []
  };
  teacher: Teacher = {
    teacherId: 0,
    cpf: '',
    name: '',
    password: '',
    trailsIds: []
  };
  trail: Trail = {
    trailId: 0,
    name: '',
    description: '',
    contents: [],
    teacherId: 0,
    studentsIds: []
  };


  loginForm = '';
  password = '';
  name = '';

  possibleLoginNames = {
    'student': 'CPF',
    'teacher': 'CPF'
  };
  loginName = '';

  possibleTitles = {
    login: 'Login',
    register: 'Register'
  };
  title = '';

  private entityService = {
    'student': this.studentService,
    'teacher': this.teacherService,
  };

  constructor(
    private teacherService: TeacherService,
    private studentService: StudentService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.title = this.possibleTitles.register;
    this.loginName = 'CPF';
    this.selectedEntity = 'teacher';
  }

  changeEntity(entity: string) {
    this.selectedEntity = entity.toLowerCase();
    this.loginName = this.possibleLoginNames[this.selectedEntity];
    console.log(this.selectedEntity);
  }

  durationInSeconds = 5;
  
  openSnackBarRegister() {
    this._snackBar.open('You have been registered!', 'Close', {
      duration: this.durationInSeconds * 1000,
    });
  }

  openSnackBarEmptyFields() {
    this._snackBar.open('Please fill all fields', 'Close', {
      duration: this.durationInSeconds * 1000,
    });
  }
 
  register() {
    const entity = this.selectedEntity;
    const cpf = this.loginForm;
    const password = this.password;
    const name = this.name;

    if (cpf === '' || password === '' || name === '') {
      this.openSnackBarEmptyFields();
      return;
    }
    
    if (entity === 'student') {
      console.log('student')
      this.studentService.createStudent({
        "cpf": cpf,
        "name": name,
        "password": password,
      }).subscribe((student) => {
        this.student = student;
      }),
      this.openSnackBarRegister();
    } else if (entity === 'teacher') {
      console.log('teacher')
      this.teacherService.createTeacher({
        "cpf": cpf,
        "name": name,
        "password": password,
      }).subscribe((teacher) => {
        this.teacher = teacher;
      })
    }
  }


}
