import { TestBed, async, inject } from '@angular/core/testing';

import { SampleguardGuard } from './sampleguard.guard';

describe('SampleguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SampleguardGuard]
    });
  });

  it('should ...', inject([SampleguardGuard], (guard: SampleguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
