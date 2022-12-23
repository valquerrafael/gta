import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
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

  lastEndpoint = ''

  loginForm = '';
  password = '';

  constructor(
    private teacherService: TeacherService,
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.snapshot.url.forEach(path => this.lastEndpoint += `/${path}`)
    localStorage.setItem('lastEndpoint', this.lastEndpoint);
    this.selectedEntity = 'teacher';
  }

  openSnackBarFailedLogin() {
    this._snackBar.open('CPF or password is incorrect', 'Close', {
      duration: this.durationInSeconds * 1000,
    });
  }

  login() {
    localStorage.setItem('entity', this.selectedEntity);
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
          this.lastEndpoint = `student/home/${student.studentId}`;
          localStorage.setItem('lastEndpoint', this.lastEndpoint);
          this.router.navigate([this.lastEndpoint]);
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
          this.lastEndpoint = `teacher/home/${teacher.teacherId}`;
          localStorage.setItem('lastEndpoint', this.lastEndpoint);
          this.router.navigate([this.lastEndpoint]);
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
    this.lastEndpoint = '/register';
    localStorage.setItem('lastEndpoint', this.lastEndpoint);
    this.router.navigate([this.lastEndpoint]);
  }
}
