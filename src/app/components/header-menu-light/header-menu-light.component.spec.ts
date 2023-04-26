import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuLightComponent } from './header-menu-light.component';

describe('HeaderMenuLightComponent', () => {
  let component: HeaderMenuLightComponent;
  let fixture: ComponentFixture<HeaderMenuLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMenuLightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMenuLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
