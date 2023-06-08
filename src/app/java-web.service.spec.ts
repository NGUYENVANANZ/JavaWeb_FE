import { TestBed } from '@angular/core/testing';

import { JavaWebService } from './java-web.service';

describe('JavaWebService', () => {
  let service: JavaWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JavaWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
