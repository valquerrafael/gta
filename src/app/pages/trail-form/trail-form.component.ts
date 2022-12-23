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

  constructor(
    private teacherService: TeacherService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.teacherService
          .getTeacherById(params['id'])
          .subscribe(teacher => this.teacher = teacher);
      }
    });
  }

  openSnackBarCreatedTrail() {
    this._snackBar.open('Trail created successfully', 'Close', {
      duration: 5000,
    });
  }

  createTrail() {
    console.log('createTrail');
    console.log(`teacher before: ${JSON.stringify(this.teacher)}`)
    if (this.teacher.teacherId) {
      this.teacherService
        .createTrail(this.teacher.teacherId, this.trail)
        .subscribe(teacher => {
          console.log(`teacher after: ${JSON.stringify(teacher)}`)
          this.teacher = teacher;
          this.openSnackBarCreatedTrail();
          this.navigateToTeacherHome();
        });
    }
  }

  deleteTrail() {
    
  }

  navigateToTeacherHome() {
    this.router.navigate([`/teacher/home/${this.teacher.teacherId}`]);
  }
}
