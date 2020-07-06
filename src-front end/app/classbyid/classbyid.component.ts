import { Component, OnInit } from '@angular/core';
import { Class } from '../class';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-classbyid',
  templateUrl: './classbyid.component.html',
  styleUrls: ['./classbyid.component.css']
})
export class ClassbyidComponent implements OnInit {
  private classes:Class[]=[];
  private id:number;
  private c: Class;
 
 
   constructor(private service:ClassService) { }
 
   public getClassById(){
     this.classes=[];
     this.service.getClassById(this.id).subscribe(
     data=>{
       this.c=data;
       this.classes.push(this.c);
     }
    );}
 
   ngOnInit() {
   }
 
 }