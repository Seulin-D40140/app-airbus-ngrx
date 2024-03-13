import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftNavbarComponent } from './aircraft-navbar.component';

describe('AircraftNavbarComponent', () => {
  let component: AircraftNavbarComponent;
  let fixture: ComponentFixture<AircraftNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircraftNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AircraftNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
