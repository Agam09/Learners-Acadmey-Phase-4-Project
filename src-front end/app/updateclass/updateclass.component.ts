import { Component, OnInit } from '@angular/core';
import { Class } from '../class';
import { ClassService } from '../class.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateclass',
  templateUrl: './updateclass.component.html',
  styleUrls: ['./updateclass.component.css']
})
export class UpdateclassComponent implements OnInit {
  private C:Class;
  private class:Class[]=[];
  constructor(private service:ClassService,private route:Router) { 
    this.C=new Class();
  }

  public updateClass(){
    return this.service.updateClass(this.C).subscribe(
      data=>{this.C=new Class();
      this.route.navigate(['/classList'])}
    )
  }
  ngOnInit() {
    this.service.getAllClass().subscribe(data=>{
      this.class=data;
    });
  }


}