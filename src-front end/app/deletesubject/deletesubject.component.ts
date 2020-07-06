import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';
import { Router } from '@angular/router';
import { Subject } from '../subject';

@Component({
  selector: 'app-deletesubject',
  templateUrl: './deletesubject.component.html',
  styleUrls: ['./deletesubject.component.css']
})
export class DeletesubjectComponent implements OnInit {
  private subjectId:number;
  private subjects:Subject[];//=[];
  private subject:Subject;

  constructor(private service:SubjectService, private router:Router) { }

  removeSubjectById(){
    return this.service.removeSubjectByID(this.subjectId).subscribe(
      data=>{
        this.subject=data;
        this.subjects.pop; 
    this.router.navigate(['/subjectList'])
  }
  )
}
  ngOnInit() {
    this.service.getAllSubjects().subscribe(data=>{
      this.subjects=data;
    });
  }

}
