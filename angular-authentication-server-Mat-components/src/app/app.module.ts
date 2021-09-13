import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterService } from './services/router.service';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { MatButtonModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotesService } from './services/notes.service';
import { NoteviewComponent } from './noteview/noteview.component';
import { NotetakerComponent } from './notetaker/notetaker.component';
import { NoteComponent } from './note/note.component';
import { EditnoteviewComponent } from './editnoteview/editnoteview.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogmaterialComponent } from './dialogmaterial/dialogmaterial.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  {
   path: 'login', component: LoginComponent 
  }, 
{
  path: 'dashboard', component: DashboardComponent,
   canActivate: [CanActivateRouteGuard],
    children:[{
      path:'view/noteview',
      component:NoteviewComponent
},
{
  path: 'view/:noteId/edit',
  component: EditnoteviewComponent,
  outlet: 'noteEditOutlet'
}]},
 { path: 'header', component: HeaderComponent }];

@NgModule({
  declarations: [DashboardComponent, LoginComponent, HeaderComponent, AppComponent, NoteviewComponent, NotetakerComponent, NoteComponent, EditnoteviewComponent, DialogmaterialComponent, TestingComponent,],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes), MatToolbarModule, MatExpansionModule, BrowserAnimationsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule,MatDialogModule],
  providers: [AuthenticationService, RouterService, CanActivateRouteGuard, NotesService],
  bootstrap: [AppComponent],
  entryComponents: [DialogmaterialComponent]
})

export class AppModule { }
