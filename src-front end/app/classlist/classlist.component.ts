import { Component, OnInit } from '@angular/core';
import { Class } from '../class';
import { Student } from '../student';
import { ClassService } from '../class.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-classlist',
  templateUrl: './classlist.component.html',
  styleUrls: ['./classlist.component.css']
})
export class ClasslistComponent implements OnInit {
  private class:Class[];
  private students:Student[];

  constructor(private service:ClassService,private stuservice:StudentService) { }

  public studetatils(){
    this.stuservice.getAllStudents().subscribe(data=>{
      this.students=data;
    });
   }
  
  
    ngOnInit() {
      this.service.getAllClass().subscribe(data=>{
        this.class=data;
        console.log(this.class);
      });
      
    }
  
  }
  