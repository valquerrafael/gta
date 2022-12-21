import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/shared/model/Student';
import { Teacher } from 'src/app/shared/model/Teacher';
import { Trail } from 'src/app/shared/model/Trail';
import { StudentService } from 'src/app/shared/services/student.service';
import { TeacherService } from 'src/app/shared/services/teacher.service';
import { TrailService } from 'src/app/shared/services/trail.service';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent implements OnInit {
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

  constructor(
    //private router: Router
    private studentService: StudentService,
    private teacherService: TeacherService,
    private trailService: TrailService,
  ) { }

  ngOnInit(): void {
   // this.router.navigate([(localStorage.getItem('lastEndpoint') || '/institution-list')]);
  }

  login() {
    this.studentService.login({
      "cpf": "12345678910",
      "password": "123456"
    }).subscribe((student) => {
      console.log(student);
      this.student = student;
    });
  }

  createStudent() {
    const cpf = (this.student.cpf) ? this.student.cpf : "12345678910";
    this.studentService.createStudent({
      "cpf": cpf,
      "name": "Test Student",
      "password": "123456"
    }).subscribe((student) => {
      console.log(student);
      this.student = student;
    });
  }

  getStudentById() {
    if (this.student.studentId)
      this.studentService.getStudentById(this.student.studentId).subscribe((student) => {
        console.log(student);
        this.student = student;
      });
  }

  changePassword() {
    if (this.student.studentId)
      this.studentService.changePassword(
        this.student.studentId, { password: "654321"}
      ).subscribe((student) => {
        console.log(student);
        this.student = student;
      });
  }

  addScore() {
    if (this.student.studentId)
      this.studentService.addScore(
        this.student.studentId, { score: 10}
      ).subscribe((student) => {
        console.log(student);
        this.student = student;
      });
  }

  getStudentByCpf() {
    if (this.student.cpf)
      this.studentService.getStudentByCpf(this.student.cpf).subscribe((student) => {
        console.log(student);
        this.student = student;
      });
  }

  deleteStudent() {
    if (this.student.studentId)
      this.studentService.deleteStudent(this.student.studentId).subscribe((student) => {
        console.log(student);
        this.student = student;
      });
  }

  subscribeTrail() {
    if (this.student.studentId && this.trail.trailId)
      this.studentService.subscribeTrail(
        this.student.studentId, { trailId: this.trail.trailId }
      ).subscribe((student) => {
        console.log(student);
        this.student = student;
      });
  }

  unsubscribeTrail() {
    if (this.student.studentId && this.trail.trailId)
      this.studentService.unsubscribeTrail(
        this.student.studentId, { trailId: this.trail.trailId }
      ).subscribe((student) => {
        console.log(student);
        this.student = student;
      });
  }

  getTrails() {
    if (this.student.studentId)
      this.studentService.getTrails(this.student.studentId).subscribe((trails) => {
        console.log(trails);
      });
  }

  getRanking() {
    this.studentService.getRanking().subscribe((students) => {
      console.log(students);
    });
  }
}
