import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/shared/model/Teacher';
import { TeacherService } from 'src/app/shared/services/teacher.service';

@Component({
  selector: 'app-teacher-register',
  templateUrl: './teacher-register.component.html',
  styleUrls: ['./teacher-register.component.scss']
})
export class TeacherRegisterComponent implements OnInit {
  teacher: Teacher;
  buttonMessage: string;

  constructor(
    private router: Router,
    private actualRoute: ActivatedRoute,
    private teacherService: TeacherService
  ) {
    this.teacher = new Teacher('', '', '');
    this.buttonMessage = 'Register';
    
    const teacherId = this.actualRoute.snapshot.paramMap.get('id');
    if (teacherId) {
      this.buttonMessage = 'Update';
      this.teacherService.getTeacher(parseInt(teacherId)).subscribe(
        teacher => this.teacher = teacher
      )
    }
  }

  ngOnInit(): void {
  }

  insertOrUpdate(): void {
    (this.buttonMessage.toLowerCase() === 'update')
    ? this.teacherService.updateTeacher(this.teacher.id, this.teacher).subscribe(
      teacher => this.router.navigate(['/teacher-list']),
    )
    : this.teacherService.insertTeacher(this.teacher).subscribe(
        teacher => this.teacher = new Teacher('', '', ''),
      );
  }
}
