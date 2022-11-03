import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { TeacherRegisterComponent } from './teacher/teacher-register/teacher-register.component';
import { TeacherRegisterTableComponent} from './teacher/teacher-register-table/teacher-register-table.component'

const routes: Routes = [
  {
    path: 'teacher-list',
    component: TeacherListComponent
  },
  {
    path: 'teacher-register',
    component: TeacherRegisterComponent
  },
  {
    path: 'teacher-register-table',
    component: TeacherRegisterTableComponent
  },
  {
    path: 'teacher-update/:id',
    component: TeacherRegisterComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
