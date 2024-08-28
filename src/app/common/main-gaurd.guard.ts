import { CanActivateFn } from '@angular/router';

export const mainGaurdGuard: CanActivateFn = (route, state) => {
  return true;
};
