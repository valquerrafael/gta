import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trail } from 'src/app/shared/model/Trail';
import { TrailService } from '../../shared/services/trail.service';
import { TrailContent } from '../../shared/model/TrailContent';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StudentService } from 'src/app/shared/services/student.service';

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
  entityId = 0;

  constructor(
    private trailService: TrailService,
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
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
    (params['studentId']) ? this.entityId = params['studentId'] : this.entityId = params['teacherId'];
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
    this.studentService.addScore(this.entityId, content).subscribe();
  }
}
