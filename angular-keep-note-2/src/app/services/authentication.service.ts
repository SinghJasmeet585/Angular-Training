import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable()
export class AuthenticationService {

  

  // isUserAuthenticated(token): Promise<boolean> {

  // }
  constructor(private httpClient :HttpClient) {

  }

  authenticateUser(user) {
    return this.httpClient.post("http://localhost:3000/auth/v1/",user);
  }
  setBearerToken(token) {
     localStorage.setItem("appToken",token);
  }
  getBearerToken():String {
   return  localStorage.getItem("appToken");
  }
  isUserAuthenticated(token:String): Promise<boolean> {
    return this.httpClient.post("http://localhost:3000/auth/v1/isAuthenticated",{},{
      headers: new HttpHeaders().set('Authorization',`Bearer ${token}`)
    }).pipe(map(res=>res['isAuthenticated'])).toPromise();
   
  }
}
