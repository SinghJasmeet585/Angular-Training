import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-notetaker',
  templateUrl: './notetaker.component.html',
  styleUrls: ['./notetaker.component.css']
})
export class NotetakerComponent implements OnInit {

  errMessage: string;
  note:Note=new Note();
  notes:Array<Note>=[];

  constructor(private notesService : NotesService) { }

  ngOnInit() {
  }

  takeNote()
  {
    if(this.note.title=="" || this.note.text=="") 
    {
      this.errMessage="Title and Text both are required fields";
      return;
    }
    this.notesService.addNote(this.note).subscribe(
      res=>{
        this.notes.push(res);
      },
      err=>{
        this.errMessage=err.message;
      }
      
    )
    this.note=new Note();
  }

}


