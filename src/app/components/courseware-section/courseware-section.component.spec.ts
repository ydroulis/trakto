import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursewareSectionComponent } from './courseware-section.component';

describe('CoursewareSectionComponent', () => {
  let component: CoursewareSectionComponent;
  let fixture: ComponentFixture<CoursewareSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursewareSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursewareSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
