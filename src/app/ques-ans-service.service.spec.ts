import { TestBed } from '@angular/core/testing';

import { QuesAnsServiceService } from './ques-ans-service.service';

describe('QuesAnsServiceService', () => {
  let service: QuesAnsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuesAnsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
