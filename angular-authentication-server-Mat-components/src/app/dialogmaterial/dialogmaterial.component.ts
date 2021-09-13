import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-dialogmaterial',
  templateUrl: './dialogmaterial.component.html',
  styleUrls: ['./dialogmaterial.component.css']
})
export class DialogmaterialComponent implements OnInit {

  note:Note;
  noteTakeForm = new FormGroup({
    title: new FormControl(''),
    text: new FormControl('')
  });

  
  constructor(private dialog: MatDialogRef<DialogmaterialComponent>,
    @Inject(MAT_DIALOG_DATA)
    private data: any, private noteService: NotesService) {

  }

  

  ngOnInit(): void {
    this.note = this.noteService.getNoteById(this.data.noteId);
    this.noteTakeForm.setValue({
      title: this.note.title,
      text: this.note.text
    })
  }

  onNoClick(): void {
    this.dialog.close();
  }

  updateNote() {
    console.log("update note")
    this.note.title=this.noteTakeForm.get('title').value;
    this.note.text=this.noteTakeForm.get('text').value;
    this.noteService.editNote(this.note).subscribe(
      data => {
        console.log(data);
        this.dialog.close();
      }
    )

  }



}
