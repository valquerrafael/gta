import { Component, OnInit } from '@angular/core';
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

  loginForm = '';
  password = '';

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
  ) { }

  ngOnInit(): void {
    this.title = this.possibleTitles.login;
    this.loginName = 'CPF';
  }

  login() {

    console.log('login', this.selectedEntity, this.loginForm, this.password);
    this.entityService[this.selectedEntity].login(this.loginForm, this.password);
  }

  changeEntity(entity: string) {
    this.selectedEntity = entity.toLowerCase();
    this.loginName = this.possibleLoginNames[this.selectedEntity];
  }

  changeToRegister() {
    console.log('change to register', this.selectedEntity);
  }
  

}
