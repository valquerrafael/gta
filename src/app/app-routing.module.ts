import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { InstitutionListComponent } from './pages/institution-list/institution-list.component';
import { InstitutionHomeComponent } from './pages/institution-home/institution-home.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'institution-list',
    component: InstitutionListComponent
  },
  {
    path: 'institution-home',
    component: InstitutionHomeComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
