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
  notes: Array<Note> = [];
  note: Note = new Note();

  constructor(private noteservice: NotesService) {
    this.note = new Note();
    this.note.title = "";
    this.note.text = "";

  }

  ngOnInit(): void {
    this.noteservice.getNotes().subscribe(
      data => {
        this.notes = data;
      },
      error => {
        this.errMessage = error.message;
      }
    )
  }

  addNote() {
    if (!this.note.text || !this.note.title) {
      this.errMessage = "Title and Text both are required fields";
      return;
    }
    this.noteservice.addNote(this.note).subscribe(
      data => {
        this.notes.push(data);
      },
      error => {
        this.errMessage = error.message;
      }
    )
    this.note = new Note();
  }


}
