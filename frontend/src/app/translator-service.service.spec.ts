import { TestBed } from '@angular/core/testing';

import { TranslatorServiceService } from './translator-service.service';

describe('TranslatorServiceService', () => {
  let service: TranslatorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslatorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
