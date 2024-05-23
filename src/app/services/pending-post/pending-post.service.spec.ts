import { TestBed } from '@angular/core/testing';

import { PendingPostService } from './pending-post.service';

describe('PendingPostService', () => {
  let service: PendingPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PendingPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
