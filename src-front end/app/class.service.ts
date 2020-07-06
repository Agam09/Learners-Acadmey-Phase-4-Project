import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Class } from './class';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private url : string;
  constructor(private http:HttpClient) {
    this.url ="http://localhost:8080/Learners_Acadmey/class";
   }

   public getAllClass() : Observable<Class[]>{
    return this.http.get<Class[]>(this.url);
  }

 public createclass(Class : Class){
   return this.http.post<Class>(this.url, Class);
 }

 public getClassById(id:number):Observable<Class>{
   
   return this.http.get<Class>(this.url+"/"+id);
}

public updateClass(Class:Class){
  return this.http.patch<Class>(this.url,Class);
}

public deleteClass(id:number){
  return this.http.delete<Class>(this.url+"/"+ id)
}

public updatestuClass(Class:Class){
 return this.http.patch<Class>("http://localhost:8080/Learners_Acadmey/class/student/",Class)
}

public updatesubClass(Class:Class){
 return this.http.patch<Class>("http://localhost:8080/Learners_Acadmey/class/subject/",Class)
}

}
