import { TestBed } from '@angular/core/testing';

import { CustomerrormessageService } from './customerrormessage.service';

describe('CustomerrormessageService', () => {
  let service: CustomerrormessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerrormessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
