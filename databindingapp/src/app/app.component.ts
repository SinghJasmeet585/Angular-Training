import { Component } from '@angular/core';
import { Student } from './model/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databindingapp';

  std:Student;
  isDisable:boolean;
  stdList:Array<Student>
  employee:string;

  constructor(){
    this.std=new Student("Jasmeet","jas@gmail.com",8787,true);
    
    this.stdList=[this.std,new Student ("tinku","tin@gmail",343,true)
    ,new Student("aditya","adi@gmail.com",822,false)];

    this.isDisable=false;
    console.log(this.stdList);

    this.employee="jasmeet";
  }
  
  onClick(){
    console.log("Learning Event Binding");
  }


}
