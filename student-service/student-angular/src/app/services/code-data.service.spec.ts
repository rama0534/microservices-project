import { TestBed } from '@angular/core/testing';

import { CodeDataService } from './code-data.service';

describe('CodeDataService', () => {
  let service: CodeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
