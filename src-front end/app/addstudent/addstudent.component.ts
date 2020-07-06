import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
private student:Student;
private subjects:Subject[];
  constructor(private service:StudentService, private service1:SubjectService, private router:Router) {
    this.student=new Student;
   }

   createStudent(){
     this.service.createStudent(this.student).subscribe(data=>{
       this.student=new Student;
       this.router.navigate(['/studentList'])
     })
   }

  ngOnInit() {
    this.service1.getAllSubjects().subscribe(data=>{
      this.subjects=data;
    });
  }

}
