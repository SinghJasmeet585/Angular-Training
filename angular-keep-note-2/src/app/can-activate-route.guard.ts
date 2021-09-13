import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './services/authentication.service';
import { RouterService } from './services/router.service';


@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(private authService :AuthenticationService,private routerService :RouterService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isUserAuthenticated(this.authService.getBearerToken()).then(
      (flag)=>{
        if(!flag)
        {
          this.routerService.routeToLogin(); 
        }
        return flag;
      },
      err=>
      {
        this.routerService.routeToLogin(); 
        return false;
      }
      
    );
  }
}
