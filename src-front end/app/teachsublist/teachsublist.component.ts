import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { Subject } from '../subject';
import { TeacherService } from '../teacher.service';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-teachsublist',
  templateUrl: './teachsublist.component.html',
  styleUrls: ['./teachsublist.component.css']
})
export class TeachsublistComponent implements OnInit {
  private teacher:Teacher[];
  private subjectList:Subject[];
  constructor(private service:TeacherService,private stuservice:SubjectService) { }
 
  public subdetatils(){
    this.stuservice.getAllSubjects().subscribe(data=>{
      this.subjectList=data;
    });
   }
  
  ngOnInit() {
    this.service.getAllTeacher().subscribe(data=>{
      this.teacher=data;console.log(this.teacher);
    }
    )
  }
  }


