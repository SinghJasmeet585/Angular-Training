import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note';
import { NoteService } from '../../service/note.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  note:Note
  noteList:Array<Note>
  constructor(private noteService: NoteService) {
    this.note = new Note();
    console.log('this is inside dashboard')
   }

  ngOnInit(){

  this.noteService.getNote().subscribe(resp =>{
    this.noteList= resp;
    console.log(resp);
  })
  }

  takeNote(){
    console.log(this.note);
    this.noteService.takeNote(this.note).subscribe(resp =>{
      this.noteList.push(resp)
      console.log("Data Saved")
      this.note = new Note();

    },
    err=>{
      console.log(err)
    })
  }


}
