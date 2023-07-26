import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router,
  ) {}
  
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | 
    UrlTree> | Promise<boolean | UrlTree> {
    
      const isNotLoggedIn = !this.userService.isLoggedIn();

      if (isNotLoggedIn) {
        this.router.navigate(['login']);
        return false;
      }
      else return true
  }
};