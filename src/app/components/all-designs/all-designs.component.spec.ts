import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDesignsComponent } from './all-designs.component';

describe('AllDesignsComponent', () => {
  let component: AllDesignsComponent;
  let fixture: ComponentFixture<AllDesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDesignsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
