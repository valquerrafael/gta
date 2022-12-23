import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Teacher } from 'src/app/shared/model/Teacher';
import { Trail } from 'src/app/shared/model/Trail';
import { TeacherService } from 'src/app/shared/services/teacher.service';
import { TrailService } from 'src/app/shared/services/trail.service';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.scss']
})
export class TeacherHomeComponent implements OnInit {
  teacher: Teacher = {
    teacherId: 0,
    cpf: '',
    name: '',
    password: '',
    trails: []
  };

  trailsSize = 0;

  trails = new Array<Trail>;

  constructor(
    private teacherService: TeacherService,
    private trailService: TrailService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.teacherService.getTeacherById(params['id']).subscribe(teacher => {
        if (teacher)  {
          this.teacher = teacher;
          this.incrementTrailsSize();
          this.getTrails();
        }
      });
    });
  }

  openSnackBarUpdatedTeacher() {
    this._snackBar.open('Password updated successfully', 'Close', {
      duration: 5000,
    });
  }

  openSnackBarUpdatedTrail() {
    this._snackBar.open('Trail updated successfully', 'Close', {
      duration: 5000,
    });
  }

  openSnackBarDeletedTrail() {
    this._snackBar.open('Trail deleted successfully', 'Close', {
      duration: 5000,
    });
  }

  incrementTrailsSize() {
    if (this.teacher.trails)
      this.trailsSize = this.teacher.trails.length;
  }

  getTrails() {
    if (this.teacher.teacherId) {
      this.teacherService
        .getTrails(this.teacher.teacherId)
        .subscribe(trails => this.trails = trails);
    }
  }

  updateTeacher() {
    console.log('updateTeacher');
    if (this.teacher.teacherId) {
      const newPassword = prompt("New Password: ");
      if (newPassword) {
        this.teacher.password = newPassword;
        this.teacherService
          .changePassword(this.teacher.teacherId, this.teacher)
          .subscribe(teacher => {
            this.teacher = teacher;
            this.openSnackBarUpdatedTeacher();
          });
      }
    }
  }

  deleteTeacher() {
    console.log('deleteTeacher');
    if (this.teacher.teacherId) {
      this.teacherService
        .deleteTeacher(this.teacher.teacherId)
        .subscribe(object => this.router.navigate(['/login']));
    }
  }

  navigateToTrailForm() {
    this.router.navigate([`/teacher/home/${this.teacher.teacherId}/create-trail`]);
  }

  deleteTrail(trail: Trail) {
    const teacherId = this.teacher.teacherId;
    if (teacherId) {
      this.teacherService
        .deleteTrail(teacherId, trail)
        .subscribe(teacher => {
          this.openSnackBarDeletedTrail();
          this.teacher = teacher;
          this.teacherService
            .getTrails(teacherId)
            .subscribe(trails => this.trails = trails);
        });
    }
  }

  navigateToTrailPage(trail: Trail) {
    this.router.navigate([`/trail/${trail.trailId}`]);
  }
}
