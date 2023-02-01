import { TestBed } from '@angular/core/testing';

import { UserinterceptorService } from './userinterceptor.service';

describe('UserinterceptorService', () => {
  let service: UserinterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserinterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
