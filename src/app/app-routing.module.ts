import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // a home(/) é uma página de login ou cadastro
  // leva para a página home da instituição do usuário
  // a página home tem que ser diferente para instituição, aluno e professor
  // {
  //   path: 'institution/:id/home',
  //   component: InstitutionListComponent,
  // },
  // {
  //   path: 'institution/:id/update',
  //   component: InstitutionUpdateComponent,
  // },
  // {
  //   path: 'institution/:id/teachers',
  //   component: InstitutionTeachersComponent,
  // },
  // {
  //   path: 'institution/:id/teachers/create',
  //   component: InstitutionTeacherCreateComponent,
  // },
  // {
  //   path: 'institution/:id/teachers/:teacherId/update',
  //   component: InstitutionTeacherUpdateComponent,
  // },
  // {
  //   path: 'institution/:id/students',
  //   component: InstitutionStudentsComponent,
  // },
  // {
  //   path: 'institution/:id/students/create',
  //   component: InstitutionStudentCreateComponent,
  // },
  // {
  //   path: 'institution/:id/students/:studentId/update',
  //   component: InstitutionStudentUpdateComponent,
  // },
  // {
  //   path: 'institution/:id/trails',
  //   component: InstitutionTrailsComponent,
  // },
  // {
  //   path: 'institution/:id/trails/create',
  //   component: InstitutionTrailCreateComponent,
  // },
  // {
  //   path: 'institution/:id/trails/:trailId/update',
  //   component: InstitutionTrailUpdateComponent,
  // },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
