import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/shared/model/Teacher';
import { Trail } from 'src/app/shared/model/Trail';
import { TeacherService } from 'src/app/shared/services/teacher.service';

@Component({
  selector: 'app-trail-form',
  templateUrl: './trail-form.component.html',
  styleUrls: ['./trail-form.component.scss']
})
export class TrailFormComponent implements OnInit {
  teacher: Teacher = {
    teacherId: 0,
    cpf: '',
    name: '',
    password: '',
    trails: []
  };

  trail: Trail = {
    trailId: 0,
    name: '',
    description: '',
    contents: [],
    teacher: 0,
    students: []
  }

  lastEndpoint = '';

  constructor(
    private teacherService: TeacherService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.activatedRoute.snapshot.url.forEach(path => this.lastEndpoint += `/${path}`)
    localStorage.setItem('lastEndpoint', this.lastEndpoint);
    this.teacherService
      .getTeacherById(this.activatedRoute.snapshot.params['id'])
      .subscribe(teacher => this.teacher = teacher);
  }

  openSnackBarCreatedTrail() {
    this._snackBar.open('Trail created successfully', 'Close', {
      duration: 5000,
    });
  }

  createTrail() {
    if (this.teacher.teacherId) {
      this.teacherService
        .createTrail(this.teacher.teacherId, this.trail)
        .subscribe(teacher => {
          this.teacher = teacher;
          this.openSnackBarCreatedTrail();
          this.navigateToTeacherHome();
        });
    }
  }

  deleteTrail() {
    
  }

  navigateToTeacherHome() {
    this.lastEndpoint = `/teacher/home/${this.teacher.teacherId}`;
    localStorage.setItem('lastEndpoint', this.lastEndpoint);
    this.router.navigate([this.lastEndpoint]);
  }
}
