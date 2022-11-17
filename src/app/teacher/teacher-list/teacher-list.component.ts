import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/shared/model/Teacher';
import { TeacherFirestoreService } from 'src/app/shared/services/teacher-firestore.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {
  teachers: Teacher[];

  constructor(private teacherFirestoreService: TeacherFirestoreService) {
    this.teachers = new Array<Teacher>;
  }

  ngOnInit(): void {
    this.teacherFirestoreService.getAll().subscribe(
      teachers => this.teachers = teachers
    );
  }

  delete(id: string | undefined): void {
    if (id)
      this.teacherFirestoreService.delete(id).subscribe(
        object => this.teachers = this.teachers.filter(teacher => teacher.id !== id)
      );
  }
}
