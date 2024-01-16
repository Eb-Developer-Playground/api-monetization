import { TestBed } from '@angular/core/testing';

import { RedocService } from './redoc.service';

describe('RedocService', () => {
  let service: RedocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
