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
import { MatTableModule} from '@angular/material/table'
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherRegisterTableComponent } from './teacher-register-table/teacher-register-table.component';
import { PipesModule } from "../shared/pipes/pipes.module";

@NgModule({
  declarations: [
    TeacherRegisterComponent,
    TeacherListComponent,
    TeacherRegisterTableComponent
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
    MatTableModule,
    RouterModule,
    HttpClientModule,
    PipesModule
  ],
  exports: [
    TeacherListComponent,
    TeacherRegisterComponent,
    TeacherRegisterTableComponent
  ]
})
export class TeacherModule { }
