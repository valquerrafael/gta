import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { StudentHomeComponent } from '../../student-home/student-home.component';

@Component({
  selector: 'app-dialog-delete-student',
  templateUrl: './dialog-delete-student.component.html',
  styleUrls: ['./dialog-delete-student.component.scss']
})
export class DialogDeleteStudentComponent implements OnInit {

  constructor(private studentHomeComponent: StudentHomeComponent) {
  }

  ngOnInit(): void {
  }

  updateStudent() {
    this.studentHomeComponent.updateStudent();
  }

  deleteStudent() {
    this.studentHomeComponent.deleteStudent();
  }
}
