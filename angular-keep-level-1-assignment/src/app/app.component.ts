import { Component } from '@angular/core';
import { Note } from './note';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  errMessage: string;
  notes: Array<Note>=[];
  note: Note = new Note();
  constructor(private noteservice:NotesService){

  }

  ngOnInit(){
    this.noteservice.getNotes().subscribe(
      data=>{
        this.notes=data;
      },
      error=>{
        this.errMessage=error.message;
      }
    )
  }

  addNote(){
    if(!this.note.text || !this.note.title){
      this.errMessage="Title and Text both are required fields";
      return;
    }
    this.noteservice.addNote(this.note).subscribe(
      data=>{
        this.notes.push(data);
      },
      error=>{
        this.errMessage=error.message;
      }
    )
    this.note=new Note();
  }

}

