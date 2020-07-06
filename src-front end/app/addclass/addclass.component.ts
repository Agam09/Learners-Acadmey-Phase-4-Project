import { Component, OnInit } from '@angular/core';
import { Class } from '../class';
import { ClassService } from '../class.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addclass',
  templateUrl: './addclass.component.html',
  styleUrls: ['./addclass.component.css']
})
export class AddclassComponent implements OnInit {
  private Class:Class;
  constructor(private service:ClassService,private router:Router) { 
    this.Class=new Class();
  }

  createClass(){
    console.log(this.Class);
    this.service.createclass(this.Class).subscribe(data=>{
      this.Class=new Class();
      this.router.navigate(['/classList'])
   })
  }

  ngOnInit() {
  }

}
