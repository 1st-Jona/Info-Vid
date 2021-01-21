import { TestBed } from '@angular/core/testing';

import { SobreCovidService } from './sobre-covid.service';

describe('SobreCovidService', () => {
  let service: SobreCovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SobreCovidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
