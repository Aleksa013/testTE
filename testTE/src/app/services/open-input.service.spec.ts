import { TestBed } from '@angular/core/testing';

import { OpenInputService } from './open-input.service';

describe('OpenInputService', () => {
  let service: OpenInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
