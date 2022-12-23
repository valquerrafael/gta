import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trail } from 'src/app/shared/model/Trail';
import { TrailService } from '../../shared/services/trail.service';
import { TrailContent } from '../../shared/model/TrailContent';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StudentService } from 'src/app/shared/services/student.service';
import { Teacher } from 'src/app/shared/model/Teacher';
import { Student } from 'src/app/shared/model/Student';

@Component({
  selector: 'app-trail-page',
  templateUrl: './trail-page.component.html',
  styleUrls: ['./trail-page.component.scss']
})
export class TrailPageComponent implements OnInit {
  trail: Trail = {};
  content: TrailContent = {
    trailContentId: 0,
    name: '',
    content: '',
    score: 0,
    trailId: 0
  };
  showScoreButton = false;
  showDeleteButton = false;
  showContentForm = false;

  constructor(
    private trailService: TrailService,
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    (localStorage.getItem('entity') === 'student') ? this.showScoreButton = true : this.showScoreButton = false;
    const params = this.activatedRoute.snapshot.params;
    this.trailService
      .getTrailById(params['trailId'])
      .subscribe(trail => {
        this.trail = trail;
        this.content.trailId = trail.trailId;
      });
    (localStorage.getItem('entity') === 'teacher') ? this.showContentForm = true : this.showContentForm = false;
    (localStorage.getItem('entity') === 'teacher') ? this.showDeleteButton = true : this.showDeleteButton = false;
  }

  openSnackBarCreatedContent() {
    this._snackBar.open('Content created successfully', 'Close', {
      duration: 5000,
    });
  }

  openSnackBarDeletedContent() {
    this._snackBar.open('Content deleted successfully', 'Close', {
      duration: 5000,
    });
  }

  openSnackBarAddedScore() {
    this._snackBar.open('Content finished successfully', 'Close', {
      duration: 5000,
    });
  }

  createContent() {
    if (this.trail.trailId) {
      this.trailService
        .createContent(this.trail.trailId, this.content)
        .subscribe(trail => {
          this.trail = trail;
          this.openSnackBarCreatedContent();
      });
    }
  }

  deleteContent(content: TrailContent) {
    if (this.trail.trailId) {
      this.trailService
        .deleteContent(this.trail.trailId, content)
        .subscribe(trail => {
          this.trail = trail;
          this.openSnackBarDeletedContent();
      });
    }
  }

  addScore(content: TrailContent) {
    this.studentService.addScore(parseInt(<string>localStorage.getItem('entityId')), content).subscribe();
    this.openSnackBarAddedScore();
    this.showScoreButton = false;
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
}
