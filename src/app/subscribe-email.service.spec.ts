import { TestBed } from '@angular/core/testing';

import { SubscribeEmailService } from './subscribe-email.service';

describe('SubscribeEmailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubscribeEmailService = TestBed.get(SubscribeEmailService);
    expect(service).toBeTruthy();
  });
});
