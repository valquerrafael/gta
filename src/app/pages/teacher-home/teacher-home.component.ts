import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Teacher } from 'src/app/shared/model/Teacher';
import { Trail } from 'src/app/shared/model/Trail';
import { TeacherService } from 'src/app/shared/services/teacher.service';

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

  lastEndpoint = ''

  trailsSize = 0;

  trails = new Array<Trail>;

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
      .subscribe(teacher => {
        if (teacher)  {
          this.teacher = teacher;
          this.getTrails();
        }
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

  getTrails() {
    if (this.teacher.teacherId) {
      this.teacherService
        .getTrails(this.teacher.teacherId)
        .subscribe(trails => {
          this.trails = trails;
          this.trailsSize = trails.length;
        });
    }
  }

  updateTeacher() {
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
    if (this.teacher.teacherId) {
      this.teacherService
        .deleteTeacher(this.teacher.teacherId)
        .subscribe(object => {
          this.lastEndpoint = '/login';
          localStorage.setItem('lastEndpoint', this.lastEndpoint);
          this.router.navigate([this.lastEndpoint]);
        });
    }
  }

  navigateToTrailForm() {
    this.lastEndpoint = `/teacher/home/${this.teacher.teacherId}/create-trail`;
    localStorage.setItem('lastEndpoint', this.lastEndpoint);
    this.router.navigate([this.lastEndpoint]);
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
    this.lastEndpoint = `/trail/${trail.trailId}`;
    localStorage.setItem('lastEndpoint', this.lastEndpoint);
    this.router.navigate([this.lastEndpoint]);
  }

  navigateToLogin() {
    this.lastEndpoint = '/login';
    localStorage.setItem('lastEndpoint', this.lastEndpoint);
    this.router.navigate([this.lastEndpoint]);
  }

  navigateToInstitutionHome() {
    this.lastEndpoint = `/institution/home/${this.teacher.teacherId}`;
    localStorage.setItem('lastEndpoint', this.lastEndpoint);
    this.router.navigate([this.lastEndpoint]);
  }
}
