import { Injectable } from '@angular/core';
import { CanActivate, Router, } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private ap: AuthService, private router: Router) { }
  canActivate(): boolean {
    if (this.ap.loggedIn()){
      return true;
    }else{
      this.router.navigate(['login'])
      return false;
    }
  }
}