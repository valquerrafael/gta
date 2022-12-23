import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Student } from 'src/app/shared/model/Student';
import { Teacher } from 'src/app/shared/model/Teacher';
import { StudentService } from 'src/app/shared/services/student.service';
import { TeacherService } from 'src/app/shared/services/teacher.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  entities = ['Student', 'Teacher'];
  selectedEntity = '';
  durationInSeconds = 5;

  loginForm = '';
  password = '';

  constructor(
    private teacherService: TeacherService,
    private studentService: StudentService,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.selectedEntity = 'teacher';
  }

  openSnackBarFailedLogin() {
    this._snackBar.open('CPF or password is incorrect', 'Close', {
      duration: this.durationInSeconds * 1000,
    });
  }

  login() {
    if (this.selectedEntity === 'student') {
      this.studentService.login({
        "cpf": this.loginForm,
        "password": this.password
      }).subscribe((student: Student) => {
        if (
          student && student !== null && student !== undefined &&
          student.studentId && student.studentId > 0 &&
          student.cpf === this.loginForm &&
          student.password === this.password
        ) {
          this.router.navigate([`student/home/${student.studentId}`]);
          return;
        } else {
          this.openSnackBarFailedLogin()
        }
      });
    } else if (this.selectedEntity === 'teacher') {
      this.teacherService.login({
        "cpf": this.loginForm,
        "password": this.password
      }).subscribe((teacher: Teacher) => {
        if (
          teacher &&
          teacher.teacherId && teacher.teacherId > 0 &&
          teacher.cpf === this.loginForm &&
          teacher.password === this.password
        ) {
          this.router.navigate([`teacher/home/${teacher.teacherId}`]);
          return;
        } else {
          this.openSnackBarFailedLogin()
        }
      });
    }
  }

  changeEntity(entity: string) {
    this.selectedEntity = entity.toLowerCase();
  }

  navigateToRegister() {
    this.router.navigate([`/register`]);
  }
}
