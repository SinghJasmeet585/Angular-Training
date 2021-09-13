import { Component } from '@angular/core';
import { FormControl} from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  submitMessage: string;
  username= new FormControl("");
  password= new FormControl("");

  constructor(private authService : AuthenticationService, private router:RouterService){

  }


  loginSubmit() {
    //console.log(this.loginForm.value);
    this.authService.authenticateUser({
      username : this.username.value,
      password : this.password.value
    }).subscribe(
      data => {
        this.authService.setBearerToken(data['token']);
        this.router.routeToDashboard();
      },
      err =>{
        if(err.error){
          this.submitMessage=err.error.message;
        }else{
          this.submitMessage=err.message;
        }
        //this.router.routeToLogin();
      }
    );

  }
}
