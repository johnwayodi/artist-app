import { TestBed } from '@angular/core/testing';

import { AppEventService } from './app-event.service';

describe('AppEventService', () => {
  let service: AppEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
