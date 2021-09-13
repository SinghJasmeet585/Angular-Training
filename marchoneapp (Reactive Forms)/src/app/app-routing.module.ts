import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:"home",component:HomeComponent
  },
  {
    path:"product",component:ProductComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"registration",component:RegistrationComponent
  },
  {
    path:"profile",component:ProfileComponent
  },
  {
    path:"**",component:HomeComponent
  },
  {
    path:"",redirectTo:"/home",pathMatch:"full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
