import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRegisterComponent } from './teacher-register/teacher-register.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { FirestoreModule } from '../firestore/firestore.module';

@NgModule({
  declarations: [
    TeacherRegisterComponent,
    TeacherListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    RouterModule,
    HttpClientModule,
    MatDividerModule,
    FirestoreModule
  ],
  exports: [
    TeacherListComponent,
    TeacherRegisterComponent
  ]
})
export class TeacherModule { }
