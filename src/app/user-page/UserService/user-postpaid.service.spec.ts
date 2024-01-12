import { TestBed } from '@angular/core/testing';

import { UserPostpaidService } from './user-postpaid.service';

describe('UserPostpaidService', () => {
  let service: UserPostpaidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPostpaidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
