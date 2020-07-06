import { Component, OnInit } from '@angular/core';
import { Class } from '../class';
import { Subject } from '../subject';
import { ClassService } from '../class.service';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-classsublist',
  templateUrl: './classsublist.component.html',
  styleUrls: ['./classsublist.component.css']
})
export class ClasssublistComponent implements OnInit {

  private class:Class[];
 private subjects:Subject[];
  constructor(private service:ClassService,private stuservice:SubjectService) { }

  public studetatils(){
  this.stuservice.getAllSubjects().subscribe(data=>{
    this.subjects=data;
  });
 }


  ngOnInit() {
    this.service.getAllClass().subscribe(data=>{
      this.class=data;
      console.log(this.class);
    });
    
  }
}
