import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './services/authentication.service';
import { RouterService } from './services/router.service';


@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private authService : AuthenticationService, private router : RouterService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      //console.log(this.authService.getBearerToken())
      return this.authService.isUserAuthenticated(this.authService.getBearerToken()).then(
        (data) => {
          //console.log(data)
          if(!data){
            this.router.routeToDashboard();
            return false;
          }
          return true;
        }
      ).catch(err =>{
        //this.router.routeToLogin();
        return false;
      });
  }
}
