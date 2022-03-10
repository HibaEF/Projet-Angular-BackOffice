import { TestBed } from '@angular/core/testing';

import { TestCartService } from './test-cart.service';

describe('TestCartService', () => {
  let service: TestCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
