import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Injectable()
export class RouterService {

  constructor(private router: Router, private location:Location) { }
  routeToDashboard() {
    this.router.navigate(['dashboard']);
  }
  routeToLogin() {
    this.router.navigate(['login']);
  }
  routeTOEditView(noteId){
    this.router.navigate(['dashboard',{
      outlets:{
        noteEditOutlet : ['view',noteId,'edit']
      }
    }]); // -> dashboard/view/editview
  }

  back(){
    this.location.back();
  }
}
