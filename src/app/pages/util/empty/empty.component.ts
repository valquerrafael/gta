import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/shared/model/Student';
import { Teacher } from 'src/app/shared/model/Teacher';
import { Trail } from 'src/app/shared/model/Trail';
import { StudentService } from 'src/app/shared/services/student.service';
import { TeacherService } from 'src/app/shared/services/teacher.service';
import { TrailService } from 'src/app/shared/services/trail.service';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    (localStorage.getItem('lastEndpoint') === '')
    ? this.router.navigate([('/login')])
    : this.router.navigate([localStorage.getItem('lastEndpoint')]);
  }
}
