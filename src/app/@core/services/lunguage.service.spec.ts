import { TestBed } from '@angular/core/testing';

import { LunguageService } from './lunguage.service';

describe('LunguageService', () => {
  let service: LunguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LunguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
