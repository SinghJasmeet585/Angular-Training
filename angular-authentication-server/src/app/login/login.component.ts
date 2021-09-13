import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private authService : AuthenticationService, private router : RouterService){

  }

  loginForm = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  });

  get username(){
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('password');
  }

  loginSubmit() {
    console.log(this.loginForm.value);
    this.authService.authenticateUser(this.loginForm.value).subscribe(
      data => {
        console.log(data);
        this.authService.setToken(data['token']);
        this.router.routeToDashboard(); // -> navigate to dashboard -> sampleguard will be executed
      },
      err =>{
        console.log(err);
        this.router.routeToLogin();
      }
    )
  }
}
