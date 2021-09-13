import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router'
import { AuthenticationService } from './services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { SampleguardGuard } from './sampleguard.guard';
import { RouterService } from './services/router.service';
import { NotetakerComponent } from './notetaker/notetaker.component';
import { NoteviewComponent } from './noteview/noteview.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import{MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material';
import { NotesService } from './services/notes.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes : Routes = [
  {
  path : 'login',component:LoginComponent,
  },
  {
    path : 'dashboard',component:DashboardComponent, canActivate : [SampleguardGuard],
    children : [{
      path : 'view/noteview',
      component : NoteviewComponent
    }]
  },
  {
    path :"", component:LoginComponent
  }
];

@NgModule({
  declarations: [ 
    DashboardComponent,
    HeaderComponent,
    AppComponent,
    LoginComponent,
    NotetakerComponent,
    NoteviewComponent
  ],
  imports: [ 
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthenticationService, 
    SampleguardGuard,
    RouterService,
    NotesService
   ],
  bootstrap: [
    AppComponent
   ]
})

export class AppModule { }
