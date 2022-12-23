import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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

  loginForm = '';
  password = '';
  name = '';

  durationInSeconds = 5;

  constructor(
    private teacherService: TeacherService,
    private studentService: StudentService,
    private _snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.selectedEntity = 'teacher';
  }

  changeEntity(entity: string) {
    this.selectedEntity = entity.toLowerCase();
  }
  
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

  openSnackBarFailedRegister() {
    this._snackBar.open('Registration failed! CPF already exists', 'Close', {
      duration: this.durationInSeconds * 1000,
    });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  register() {
    if (this.loginForm === '' || this.password === '' || this.name === '') {
      this.openSnackBarEmptyFields();
      return;
    }
    
    if (this.selectedEntity === 'student') {
      this.studentService.createStudent({
        "cpf": this.loginForm,
        "name": this.name,
        "password": this.password,
      }).subscribe((student) => {
        if (
          student &&
          student.studentId && student.studentId > 0 &&
          student.name === this.name &&
          student.cpf === this.loginForm &&
          student.password === this.password
        ) {
          this.openSnackBarRegister();
          this.navigateToLogin();
        } else {
          this.openSnackBarFailedRegister();
        }
      });
    } else if (this.selectedEntity === 'teacher') {
      this.teacherService.createTeacher({
        "cpf": this.loginForm,
        "name": this.name,
        "password": this.password,
      }).subscribe((teacher) => {
        if (
          teacher &&
          teacher.teacherId && teacher.teacherId > 0 &&
          teacher.name === this.name &&
          teacher.cpf === this.loginForm &&
          teacher.password === this.password
        ) {
          this.openSnackBarRegister();
          this.navigateToLogin();
        } else {
          this.openSnackBarFailedRegister();
        }
      });
    }
  }
}
