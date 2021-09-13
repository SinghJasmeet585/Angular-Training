import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';
import { RouterService } from './services/router.service';

@Injectable({
  providedIn: 'root'
})
export class SampleguardGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: RouterService) {
    //this.authService.isUserAuthorized(this.authService.getToken());
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.isUserAuthorized(this.authService.getToken()).then(
      (flag) => {
        //console.log(flag);
        if (!flag) {
          this.router.routeToLogin();
          return false;
        }
        return flag;
      }
    ).catch(err=>{
      this.router.routeToLogin();
      return false;
    });

    //return true;

  }

}
