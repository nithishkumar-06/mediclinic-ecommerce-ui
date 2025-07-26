import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const abcGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('tk');
  const router = inject(Router);
  if(token){
  return true;
  }else{
    router.navigateByUrl('/login');
    return false
  };
};
