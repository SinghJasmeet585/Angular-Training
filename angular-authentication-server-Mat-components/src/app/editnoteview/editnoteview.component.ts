import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { DialogmaterialComponent } from '../dialogmaterial/dialogmaterial.component';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-editnoteview',
  templateUrl: './editnoteview.component.html',
  styleUrls: ['./editnoteview.component.css']
})
export class EditnoteviewComponent implements OnInit {

  constructor(private dialog : MatDialog,private activatedRoute : ActivatedRoute,private routerService:RouterService) { 
    const id = +this.activatedRoute.snapshot.paramMap.get('noteId');
    this.dialog.open(DialogmaterialComponent,{
      data:{
        noteId:id
      }
    }).afterClosed().subscribe(
      result=>{
        this.routerService.back();
        //this.routerService.routeToDashboard();
      }
    )
  }

  ngOnInit() {
  }

}
