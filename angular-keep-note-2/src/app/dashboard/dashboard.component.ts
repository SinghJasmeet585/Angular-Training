import { Component } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  errMessage: string;
  note:Note=new Note();
  notes:Array<Note>=[];
  constructor(private notesService:NotesService)
  {

  }
  ngOnInit()
  {
    
    this.notesService.getNotes().subscribe(
      res=>{
        //console.log(res);
        this.notes=res;
      },
      err=>{
        this.errMessage=err.message;
      }
    )
  }

  takeNote()
  {
    //console.log("ok");
    if(this.note.title==""||this.note.text=="") 
    {
      this.errMessage="Title and Text both are required fields";
      return;
    }
    this.notesService.addNote(this.note).subscribe(
      res=>{
        //console.log(res);
        this.notes.push(res);
      },
      err=>{
        this.errMessage=err.message;
      }
      
    )
    this.note=new Note();
  }

}
