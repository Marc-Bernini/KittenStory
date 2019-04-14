import { TestBed } from '@angular/core/testing';

import { KittenTransfertService } from './kitten-transfert.service';

describe('KittenTransfertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KittenTransfertService = TestBed.get(KittenTransfertService);
    expect(service).toBeTruthy();
  });
});
