import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Student } from 'src/app/shared/model/Student';
import { Trail } from 'src/app/shared/model/Trail';
import { StudentService } from 'src/app/shared/services/student.service';
import { DialogDeleteStudentComponent } from '../util/dialog-delete-student/dialog-delete-student.component';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {
  student: Student = {
    studentId: 0,
    cpf: '',
    name: '',
    password: '',
    score: 0,
    trails: []
  };

  trailsSize = 0;

  trails = new Array<Trail>;

  constructor(
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.studentService.getStudentById(params['id']).subscribe(student => {
        if (student)  {
          this.student = student;
          this.incrementTrailsSize();
          this.getTrails();
        }
      });
    });
  }

  openSnackBarUpdatedStudent() {
    this._snackBar.open('Password updated successfully', 'Close', {
      duration: 5000,
    });
  }

  incrementTrailsSize() {
    if (this.student.trails)
      this.trailsSize = this.student.trails.length;
  }

  getTrails() {
    if (this.student.studentId) {
      this.studentService
        .getTrails(this.student.studentId)
        .subscribe(trails => this.trails = trails);
    }
  }

  updateStudent() {
    console.log('updateStudent');
    if (this.student.studentId) {
      const newPassword = prompt("New Password: ");
      if (newPassword) {
        this.student.password = newPassword;
        this.studentService
          .changePassword(this.student.studentId, this.student)
          .subscribe(student => {
            this.student = student;
            this.openSnackBarUpdatedStudent();
          });
      }
    }
  }

  deleteStudent() {
    console.log('deleteStudent');
    if (this.student.studentId) {
      this.studentService
        .deleteStudent(this.student.studentId)
        .subscribe(object => this.router.navigate(['/login']));
    }
  }

  // openDeleteDialog() {
  //   const dialogRef = this.dialog.open(DialogDeleteStudentComponent);
  // }
}
