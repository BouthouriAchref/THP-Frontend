import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private auth: LoginService, private router: Router) { }
  canActivate(){
    if (this.auth.isAuthenticated()){
      return true;
      
    }else (this.router.navigate(['login']))
  }

}
