import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService :AuthenticationService, private routerService :RouterService)
  {
    
  }

  submitMessage:String;
  username = new FormControl("",Validators.required);
  password =new FormControl("",[Validators.required,Validators.minLength(8)])

//  get username()
//  {
//    return this.username.value;
//  }

//  get password()
//  {
//    return this.loginForm.get("password");
//  }

  // loginSubmit() 
  // {
  //   this.authService.authenticateUser(this.loginForm.value).subscribe(
  //     (data)=>{
  //             console.log(data);
  //             this.authService.setBearerToken(data['token']);
  //             this.routerService.routeToDashboard();
  //     },
  //     err=>
  //     {
  //       console.log(err.message);
  //       this.routerService.routeToLogin();

  //     }
  //   )
  // }
  loginSubmit() 
  {
    this.authService.authenticateUser({
      username :this.username.value,
      password :this.password.value
    })
    .subscribe(
      (data)=>{
              console.log(data);
              this.authService.setBearerToken(data['token']);
              this.routerService.routeToDashboard();
      },
      err=>
      {

        console.log(err.message);
        if ( err.status === 403) {
          this.submitMessage = err.error.message;
          console.log('Invalid credentials');
        }else {
          this.submitMessage = err.message;
          console.log('404 error');
        }
      }
    )
  }
}
