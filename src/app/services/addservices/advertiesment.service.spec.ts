import { TestBed } from '@angular/core/testing';

import { AdvertiesmentService } from './advertiesment.service';

describe('AdvertiesmentService', () => {
  let service: AdvertiesmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvertiesmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
