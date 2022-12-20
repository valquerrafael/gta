import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './util/empty/empty.component';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { InstitutionListComponent } from './institution-list/institution-list.component';
import { InstitutionHomeComponent } from './institution-home/institution-home.component';

@NgModule({
  declarations: [
    EmptyComponent,
    LoginComponent,
    InstitutionListComponent,
    InstitutionHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    EmptyComponent,
    LoginComponent
  ]
})
export class PagesModule { }
