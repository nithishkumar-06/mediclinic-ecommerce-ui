import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const entryGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('entry');
  const router = inject(Router);
  if(token){
  return true;
  }else{
    router.navigateByUrl('/entry');
    return false
  };
};
