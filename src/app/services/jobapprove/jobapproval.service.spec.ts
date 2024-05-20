import { TestBed } from '@angular/core/testing';

import { JobapprovalService } from './jobapproval.service';

describe('JobapprovalService', () => {
  let service: JobapprovalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobapprovalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
