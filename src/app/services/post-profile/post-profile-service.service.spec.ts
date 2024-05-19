import { TestBed } from '@angular/core/testing';

import { PostProfileServiceService } from './post-profile-service.service';

describe('PostProfileServiceService', () => {
  let service: PostProfileServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostProfileServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
