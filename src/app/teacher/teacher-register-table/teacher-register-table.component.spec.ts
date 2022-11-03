import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherRegisterTableComponent } from './teacher-register-table.component';

describe('TeacherRegisterTableComponent', () => {
  let component: TeacherRegisterTableComponent;
  let fixture: ComponentFixture<TeacherRegisterTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherRegisterTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherRegisterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
