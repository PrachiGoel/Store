import { TestBed } from '@angular/core/testing';

import { FruitDataService } from './fruit-data.service';

describe('FruitDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FruitDataService = TestBed.get(FruitDataService);
    expect(service).toBeTruthy();
  });
});
