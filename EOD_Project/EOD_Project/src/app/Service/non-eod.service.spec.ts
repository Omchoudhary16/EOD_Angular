import { TestBed } from '@angular/core/testing';

import { NonEodService } from './non-eod.service';

describe('NonEodService', () => {
  let service: NonEodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonEodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
