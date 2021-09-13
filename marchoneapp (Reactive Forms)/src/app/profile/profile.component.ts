import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile : Profile;

  constructor(private profileService : ProfileService) { 
    this.profile=new Profile();
  }

  profileForm = new FormGroup({
    firstname : new FormControl('',Validators.required),
    lastname : new FormControl(''),
    email : new FormControl('',Validators.email),
    phone : new FormControl('',Validators.pattern(/^[0-9]{10}$/)),
    terms : new FormControl(''),
    gender : new FormControl('')
  });

  ngOnInit(): void {
  }

  public firstName(){
    return this.profileForm.get('firstname');
  }

  public lastName(){
    return this.profileForm.get('lastname');
  }

  setProfileData(){
    this.profile.firstname=this.profileForm.get('firstname').value;
    this.profile.lastname=this.profileForm.get('lastname').value;
    this.profile.email=this.profileForm.get('email').value;
    this.profile.phone=this.profileForm.get('phone').value;
    this.profile.terms=this.profileForm.get('terms').value;
    this.profile.gender=this.profileForm.get('gender').value;
    //this.profileService.saveProfileDetails(this.profile);
    this.profileService.saveProfileDetails(this.profile).subscribe(
      data=>{
        alert("inside set");
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    )
  }


  // profileRegister(){
  //   console.log(this.profileForm.value)
  //   this.profileForm.patchValue({
  //     firstName : 'ABC',
  //     lastName : 'XYZ',
  //     email : 'abc@gms.com',
  //     phone : '1234567891'
  //   })
  // }

}
