import { TestBed, inject } from '@angular/core/testing';

import { VoringService } from './voring.service';

describe('VoringService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoringService]
    });
  });

  it('should be created', inject([VoringService], (service: VoringService) => {
    expect(service).toBeTruthy();
  }));
});
