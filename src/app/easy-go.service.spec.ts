import { TestBed } from '@angular/core/testing';

import { EasyGoService } from './easy-go.service';

describe('EasyGoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EasyGoService = TestBed.get(EasyGoService);
    expect(service).toBeTruthy();
  });
});
