import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subjectbyid',
  templateUrl: './subjectbyid.component.html',
  styleUrls: ['./subjectbyid.component.css']
})
export class SubjectbyidComponent implements OnInit {
  private subject:Subject;
  private subjects:Subject[]=[];
  private subjectId:number;


  constructor(private service:SubjectService) { }

  getSubjectById(){
    this.subjects=[];
    this.service.getSubjectById(this.subjectId).subscribe(data=>{
      this.subject=data;
      this.subjects.push(this.subject);
    })
  }

  ngOnInit() {

    }
  }

