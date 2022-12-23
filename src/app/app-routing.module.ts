import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { InstitutionHomeComponent } from './pages/institution-home/institution-home.component';
import { RegisterComponent } from './pages/register/register.component';
import { StudentHomeComponent } from './pages/student-home/student-home.component';
import { TeacherHomeComponent } from './pages/teacher-home/teacher-home.component';
import { TrailFormComponent } from './pages/trail-form/trail-form.component';
import { TrailPageComponent } from './pages/trail-page/trail-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'institution-home',
    component: InstitutionHomeComponent
  },
  {
    path: 'student/home/:id',
    component: StudentHomeComponent
  },
  {
    path: 'teacher/home/:id',
    component: TeacherHomeComponent
  },
  {
    path: 'teacher/home/:id/create-trail',
    component: TrailFormComponent
  },
  {
    path: 'student/:id/trail/:id',
    component: TrailPageComponent
  },
  {
    path: 'teacher/:id/trail/:id',
    component: TrailPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
