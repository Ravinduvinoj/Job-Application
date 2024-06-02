import { TestBed } from '@angular/core/testing';

import { ListningsService } from './listnings.service';

describe('ListningsService', () => {
  let service: ListningsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListningsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
