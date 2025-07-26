import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsetailsComponent } from './patientsetails.component';

describe('PatientsetailsComponent', () => {
  let component: PatientsetailsComponent;
  let fixture: ComponentFixture<PatientsetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientsetailsComponent]
    });
    fixture = TestBed.createComponent(PatientsetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
