import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../shared/model/Teacher'
import { TeacherService } from 'src/app/shared/services/teacher.service';

@Component({
  selector: 'app-teacher-register-table',
  templateUrl: './teacher-register-table.component.html',
  styleUrls: ['./teacher-register-table.component.scss']
})
export class TeacherRegisterTableComponent implements OnInit {

  teachers: Teacher[];
  showCols: ['id', 'name', 'email', 'registration'];

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.teacherService.getAllTeachers().subscribe(
      teachers => this.teachers = teachers
    );
  }

}
