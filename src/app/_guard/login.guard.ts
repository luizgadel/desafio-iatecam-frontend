import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router,
  ) {}
  
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | 
    UrlTree> | Promise<boolean | UrlTree> {
    
      const isLoggedIn = this.userService.isLoggedIn();

      if (isLoggedIn) {
        this.router.navigate(['home']);
        return false;
      }
      else return true
  }
};
