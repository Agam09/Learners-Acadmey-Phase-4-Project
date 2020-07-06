import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from './subject'

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private url:string
  constructor(private http:HttpClient) {
    this.url="http://localhost:8080/Learners_Acadmey/subject"
   }

  public getAllSubjects():Observable<Subject[]>{
   return this.http.get<Subject[]>(this.url);
  }

  public createSubject(subject:Subject){
    return this.http.post<Subject>(this.url,subject);
  }

  public getSubjectById(subjectId:number):Observable<Subject>{
    return this.http.get<Subject>(this.url+"/"+subjectId);
  }

  public removeSubjectByID(subjectId:number){
    return this.http.delete<Subject>(this.url+"/"+subjectId);
  }
  public updateSubject(subject:Subject){
    return this.http.patch<Subject>(this.url,subject);
  }
    
  }