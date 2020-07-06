import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-studentbyid',
  templateUrl: './studentbyid.component.html',
  styleUrls: ['./studentbyid.component.css']
})
export class StudentbyidComponent implements OnInit {
  private student:Student;
  private students:Student[]=[];
  private studentId:number;


  constructor(private service:StudentService) { }

  getStudentById(){
    this.students=[];
    this.service.getStudentById(this.studentId).subscribe(data=>{
      this.student=data;
      this.students.push(this.student);
    })
  }

  ngOnInit() {

    }
  }


