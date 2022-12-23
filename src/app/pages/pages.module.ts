import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './util/empty/empty.component';
import { InstitutionHomeComponent } from './institution-home/institution-home.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import { DialogDeleteStudentComponent } from './util/dialog-delete-student/dialog-delete-student.component';
import { TrailFormComponent } from './trail-form/trail-form.component';
import { TrailPageComponent } from './trail-page/trail-page.component';

@NgModule({
  declarations: [
    EmptyComponent,
    InstitutionHomeComponent,
    LoginComponent,
    RegisterComponent,
    StudentHomeComponent,
    TeacherHomeComponent,
    DialogDeleteStudentComponent,
    TrailFormComponent,
    TrailPageComponent    
  ],
  imports: [    
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    EmptyComponent,
    InstitutionHomeComponent,
    LoginComponent,
    RegisterComponent,
    StudentHomeComponent,
    TeacherHomeComponent,
    DialogDeleteStudentComponent,
    TrailFormComponent,
    TrailPageComponent
  ]
}) export class PagesModule { }
