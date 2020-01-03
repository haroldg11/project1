import { TestBed } from '@angular/core/testing';

import { VideesService } from './videes.service';

describe('VideesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideesService = TestBed.get(VideesService);
    expect(service).toBeTruthy();
  });
});
