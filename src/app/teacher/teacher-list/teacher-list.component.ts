import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/shared/model/Teacher';
import { TeacherService } from 'src/app/shared/services/teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {
  teachers: Teacher[];

  constructor(private teacherService: TeacherService) {
    this.teachers = new Array<Teacher>;
  }

  ngOnInit(): void {
    this.teacherService.getAllTeachers().subscribe(
      teachers => this.teachers = teachers
    );
  }

  delete(id: number): void {
    this.teacherService.deleteTeacher(id).subscribe(
      object => this.teachers.splice(
        this.teachers.findIndex(teacher => teacher.id === id),
        1
      )
    );
  }
}
