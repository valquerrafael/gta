import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailPageComponent } from './trail-page.component';

describe('TrailPageComponent', () => {
  let component: TrailPageComponent;
  let fixture: ComponentFixture<TrailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
