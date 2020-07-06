import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';
import { StudentbyidComponent } from './studentbyid/studentbyid.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentService } from './student.service';
import { FormsModule } from '@angular/Forms'
import { HttpClientModule } from '@angular/common/http';
import { AddsubjectComponent } from './addsubject/addsubject.component';
import { DeletesubjectComponent } from './deletesubject/deletesubject.component';
import { SubjectbyidComponent } from './subjectbyid/subjectbyid.component';
import { SubjectlistComponent } from './subjectlist/subjectlist.component';
import { AddclassComponent } from './addclass/addclass.component';
import { DeleteclassComponent } from './deleteclass/deleteclass.component';
import { ClassbyidComponent } from './classbyid/classbyid.component';
import { ClasslistComponent } from './classlist/classlist.component';
import { AddteacherComponent } from './addteacher/addteacher.component';
import { DeleteteacherComponent } from './deleteteacher/deleteteacher.component';
import { TeacherbyidComponent } from './teacherbyid/teacherbyid.component';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { UpdatesubjectComponent } from './updatesubject/updatesubject.component';
import { UpdateclassComponent } from './updateclass/updateclass.component';
import { UpdateteacherComponent } from './updateteacher/updateteacher.component';
import { ClasssublistComponent } from './classsublist/classsublist.component';
import { StuteachlistComponent } from './stuteachlist/stuteachlist.component';
import { TeachsublistComponent } from './teachsublist/teachsublist.component';
import { UpdateclasssubComponent } from './updateclasssub/updateclasssub.component';
import { UpdatestuclassComponent } from './updatestuclass/updatestuclass.component';
import { UpdateteachstuComponent } from './updateteachstu/updateteachstu.component';
import { UpdateteachsubComponent } from './updateteachsub/updateteachsub.component'

@NgModule({
  declarations: [
    AppComponent,
    AddstudentComponent,
    DeletestudentComponent,
    StudentbyidComponent,
    StudentlistComponent,
    AddsubjectComponent,
    DeletesubjectComponent,
    SubjectbyidComponent,
    SubjectlistComponent,
    AddclassComponent,
    DeleteclassComponent,
    ClassbyidComponent,
    ClasslistComponent,
    AddteacherComponent,
    DeleteteacherComponent,
    TeacherbyidComponent,
    TeacherlistComponent,
    UpdatestudentComponent,
    UpdatesubjectComponent,
    UpdateclassComponent,
    UpdateteacherComponent,
    ClasssublistComponent,
    StuteachlistComponent,
    TeachsublistComponent,
    UpdateclasssubComponent,
    UpdatestuclassComponent,
    UpdateteachstuComponent,
    UpdateteachsubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
