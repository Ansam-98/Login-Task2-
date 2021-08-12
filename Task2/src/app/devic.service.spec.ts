import { TestBed } from '@angular/core/testing';

import { DevicService } from './devic.service';

describe('DevicService', () => {
  let service: DevicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
