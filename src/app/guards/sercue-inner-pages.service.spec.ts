import { TestBed } from '@angular/core/testing';

import { SercueInnerPagesService } from './sercue-inner-pages.service';

describe('SercueInnerPagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SercueInnerPagesService = TestBed.get(SercueInnerPagesService);
    expect(service).toBeTruthy();
  });
});
