import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})

export class secureGuard implements CanActivate {

  constructor(private authService: ApiService) {}

  canActivate(){
    if (this.authService.flag) {
      console.log(this.authService.flag)
      return true;
    } else {
      return false;
    }
  }
}