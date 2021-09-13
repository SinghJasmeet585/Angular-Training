import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../model/note';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  note:Note;

  constructor(private http:HttpClient) { 
    this.note=new Note();
  }

  getNote():Observable<Array<Note>>{
    return this.http.get<Array<Note>>('http://localhost:3000/notes');
  }

  // getNote():Observable<Array<Note>>{
  //   return this.http.get<Array<Note>>('http://localhost:4000/employee');
  // }

  takeNote(val:Note):Observable<Note>{
    return this.http.post<Note>('http://localhost:3000/notes',val)
  }

}
