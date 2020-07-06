import { Component, OnInit } from '@angular/core';
import { Class } from '../class';
import { ClassService } from '../class.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteclass',
  templateUrl: './deleteclass.component.html',
  styleUrls: ['./deleteclass.component.css']
})
export class DeleteclassComponent implements OnInit {
  private c:Class[]=[];
  private class:Class;
  private id:number;
  
  constructor(private service:ClassService,private router:Router) { }

   public deleteClass(){
    return this.service.deleteClass(this.id).subscribe(
      data=>{
        this.class=data;
        this.c.pop;
        this.router.navigate(['/classList'])
      }
    )

   }
  ngOnInit() {
    this.service.getAllClass().subscribe(data=>{
      this.c=data;
      console.log(this.class);
    });
  }

}