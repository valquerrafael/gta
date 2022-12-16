import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  // {
  //   path: 'institution/register',
  //   component: InstitutionRegisterComponent
  // },
  // {
  //   path: 'teacher/register',
  //   component: TeacherRegisterComponent
  // },
  // {
  //   path: 'student/register',
  //   component: StudentRegisterComponent
  // },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
