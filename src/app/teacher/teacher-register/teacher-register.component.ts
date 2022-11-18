import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/shared/model/Teacher';
import { TeacherFirestoreService } from 'src/app/shared/services/teacher-firestore.service';

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
    private teacherFirestoreService: TeacherFirestoreService,
  ) {
    this.teacher = new Teacher();
    this.buttonMessage = 'Register';
    
    const teacherId = this.actualRoute.snapshot.paramMap.get('id');
    if (teacherId) {
      this.buttonMessage = 'Update';
      this.teacherFirestoreService.get(teacherId).subscribe(
        teacher => this.teacher = teacher
      );
    }
  }

  ngOnInit(): void {
  }

  insertOrUpdate(): void {
    (this.buttonMessage.toLowerCase() === 'update')
    ? this.teacherFirestoreService.update(this.teacher).subscribe(
        teacher => {
          alert('Teacher updated successfully!');
          this.router.navigate(['teacher-list']);
        },
      )
    : this.teacherFirestoreService.insert(this.teacher).subscribe(
        teacher => {
          alert('Teacher registered successfully!');
          this.teacher = new Teacher();
        },
      );
    ;
  }
}
