import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEODComponent } from './add-eod.component';

describe('AddEODComponent', () => {
  let component: AddEODComponent;
  let fixture: ComponentFixture<AddEODComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEODComponent]
    });
    fixture = TestBed.createComponent(AddEODComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
