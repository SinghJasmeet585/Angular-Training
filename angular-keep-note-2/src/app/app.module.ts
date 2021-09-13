import { NgModule } from '@angular/core';
import {BrowserModule} from'@angular/platform-browser';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes,RouterModule} from "@angular/router"
import { AuthenticationService } from './services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterService } from './services/router.service';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import{MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material';
import { NotesService } from './services/notes.service';
const routes: Routes=[
  {
    path :'', component:LoginComponent
  },
  {
    path :'login', component:LoginComponent
  },
  {
    path:'dashboard', component: DashboardComponent,canActivate:[CanActivateRouteGuard]
  },
];
@NgModule({
  declarations: [ 
    DashboardComponent,
    HeaderComponent,
    LoginComponent,
    AppComponent 
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  providers: [ 
    AuthenticationService,
    RouterService,
    CanActivateRouteGuard,
    NotesService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
