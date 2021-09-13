import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm=new FormGroup({
    username : new FormControl('',[Validators.required,Validators.minLength(2)]),
    password : new FormControl('',[Validators.required,Validators.minLength(8)])

  });

  // profileForm=new FormGroup({
  //   firstname : new FormControl(''),
  //   lastname : new FormControl(''),
  //   addressForm : new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl('')
  //   })
  // })

  constructor() { 

    
  }

  // username = new FormControl('',Validators.required);
  // password = new FormControl('',[Validators.required,Validators.minLength(8)]);

  ngOnInit(): void {
  }

  //getter
  public get username(){
    return this.registrationForm.get('username');
  }

  //getter
  public get password(){
    return this.registrationForm.get('password');
  }

  register():void{
    console.log("Registration working fine");
    alert("registration working fine");
    // console.log("Username = " + this.username.value);
    // console.log("Password = " + this.password.value);
    console.log(this.registrationForm.value);
    console.log(this.registrationForm.get('username'));
    console.log(this.registrationForm.get('password'));
    alert(this.registrationForm.get('username').value);
  }

  // profile():void{
  //   console.log("Inside profile");
  // }

}
