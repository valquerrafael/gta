import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/shared/model/Student';
import { Teacher } from 'src/app/shared/model/Teacher';
import { Trail } from 'src/app/shared/model/Trail';
import { StudentService } from 'src/app/shared/services/student.service';
import { TeacherService } from 'src/app/shared/services/teacher.service';
import { TrailService } from 'src/app/shared/services/trail.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface PeriodicElement {
  name: string;
  position: number;
  points: number;
}

@Component({
  selector: 'app-institution-home',
  templateUrl: './institution-home.component.html',
  styleUrls: ['./institution-home.component.scss']
})
export class InstitutionHomeComponent implements OnInit {
  dataSource = [];

  trails = new Array<Trail>;
  teachers = new Array<Teacher>;
  students = new Array<Student>;
  ranking = new Array<Student>;

  lastEndpoint = '';
  showSubscribeButton = false;

  displayedColumnsTrails: string[] = ['name', 'description', 'teachers'];

  constructor(
    private trailService: TrailService,
    private teacherService: TeacherService,
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  openSnackBarRegisterSucessfuly() {
    this._snackBar.open('Registered successfully!', 'Close', {
      duration: 5000,
    });
  }

  ngOnInit(): void {
    this.activatedRoute.snapshot.url.forEach(path => this.lastEndpoint += `/${path}`)
    localStorage.setItem('lastEndpoint', this.lastEndpoint);
    (localStorage.getItem('entity') === 'student') ? this.showSubscribeButton = true : this.showSubscribeButton = false;
    function sortFunction(entity1, entity2) {
      if (entity1.name && entity2.name) {
        const nameEntity1 = entity1.name.toUpperCase();
        const nameEntity2 = entity2.name.toUpperCase();

        if (nameEntity1 > nameEntity2) {
          return 1;
        }
        if (nameEntity1 < nameEntity2) {
          return -1;
        } 

        return 0;
      }

      return 0;
    }

    this.trailService.getAll().subscribe(trails => {
      this.trails = trails.sort((trail1, trail2) => sortFunction(trail1, trail2))
    });
    this.teacherService.getAll().subscribe(teachers => {
      this.teachers = teachers.sort((teacher1, teacher2) => sortFunction(teacher1, teacher2));
    });
    this.studentService.getAll().subscribe(students => {
      this.students = students.sort((student1, student2) => sortFunction(student1, student2));
    });
    this.studentService.getRanking().subscribe(ranking => {
      this.ranking = ranking;
    });
  }

  navigateTo(entity?: Trail | Teacher | Student) {
    let newLastEndpoint;

    if (!entity) {
      newLastEndpoint = `/${
      (localStorage.getItem('entity') === 'teacher') ? 'teacher' : 'student'
    }/home/${localStorage.getItem('entityId')}`;

    }

    if (entity instanceof Trail && entity.trailId) {
      newLastEndpoint = `/trail/${entity.trailId}`;
    }
    if (
      entity instanceof Teacher &&
      localStorage.getItem('entity') === 'teacher' &&
      entity.teacherId &&
      entity.teacherId.toString() === localStorage.getItem('entityId')
    ) {
      newLastEndpoint = `/teacher/home/${entity.teacherId}`;
    }
    if (
      entity instanceof Student &&
      localStorage.getItem('entity') === 'student' &&
      entity.studentId &&
      entity.studentId.toString() === localStorage.getItem('entityId')
    ) {
      newLastEndpoint = `/student/home/${entity.studentId}`;
    }

    if (newLastEndpoint) {
      localStorage.setItem('lastEndpoint', newLastEndpoint);
      this.router.navigate([newLastEndpoint]);
    }
  }

  subscribe(trail: Trail) {
    this.studentService.subscribeTrail(
      parseInt(<string>localStorage.getItem('entityId')),
      trail
    ).subscribe();
    this.openSnackBarRegisterSucessfuly();
  }
}
