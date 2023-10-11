import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveEODComponent } from './leave-eod.component';

describe('LeaveEODComponent', () => {
  let component: LeaveEODComponent;
  let fixture: ComponentFixture<LeaveEODComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveEODComponent]
    });
    fixture = TestBed.createComponent(LeaveEODComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
