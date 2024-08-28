import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { mainGaurdGuard } from './main-gaurd.guard';

describe('mainGaurdGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => mainGaurdGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
