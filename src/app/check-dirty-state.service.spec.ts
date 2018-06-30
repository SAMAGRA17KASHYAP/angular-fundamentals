import { TestBed, inject } from '@angular/core/testing';

import { CheckDirtyStateService } from './check-dirty-state.service';

describe('CheckDirtyStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckDirtyStateService]
    });
  });

  it('should be created', inject([CheckDirtyStateService], (service: CheckDirtyStateService) => {
    expect(service).toBeTruthy();
  }));
});
