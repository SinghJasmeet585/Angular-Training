import { Component } from '@angular/core';
import {Student} from './model/student'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databindingapp';

  std:Student;
  isDisable:boolean;
  stdList:Array<Student>;

 employee:string;

  constructor(){
    this.std= new Student("Sachin","sachin@gmail.com",12345678,true);

    this.stdList = [this.std, new Student("tinku","tinku@gmail.com",222654,true)
    , new Student("vikas","vikas@gmail.com",67678698,false)]

    this.isDisable=false

    console.log(this.stdList);

    this.employee="Sachin"
  }

onClick(){
  console.log("Learning Event binding");
}


}
