import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuDarkComponent } from './header-menu-dark.component';

describe('HeaderMenuDarkComponent', () => {
  let component: HeaderMenuDarkComponent;
  let fixture: ComponentFixture<HeaderMenuDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMenuDarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMenuDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
