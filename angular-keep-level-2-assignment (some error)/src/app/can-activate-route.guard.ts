import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './services/authentication.service';
import { RouterService } from './services/router.service';


@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(private authService : AuthenticationService, private router : RouterService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    

      return this.authService.isUserAuthenticated(this.authService.getBearerToken()).then(
        (data) => {
          if(!data){
            this.router.routeToLogin();
            return false;
          }
          return true;
        }
      ).catch(err =>{
        this.router.routeToLogin();
        return false;
      });
  }
}
