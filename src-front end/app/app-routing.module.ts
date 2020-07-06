import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentbyidComponent } from './studentbyid/studentbyid.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';
import { AddsubjectComponent } from './addsubject/addsubject.component';
import { SubjectlistComponent } from './subjectlist/subjectlist.component';
import { SubjectbyidComponent } from './subjectbyid/subjectbyid.component';
import { DeletesubjectComponent } from './deletesubject/deletesubject.component';
import { AddclassComponent } from './addclass/addclass.component';
import { ClasslistComponent } from './classlist/classlist.component';
import { ClassbyidComponent } from './classbyid/classbyid.component';
import { DeleteclassComponent } from './deleteclass/deleteclass.component';
import { AddteacherComponent } from './addteacher/addteacher.component';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import { TeacherbyidComponent } from './teacherbyid/teacherbyid.component';
import { DeleteteacherComponent } from './deleteteacher/deleteteacher.component';
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
import { UpdateteachsubComponent } from './updateteachsub/updateteachsub.component';


const routes: Routes = [
  {path:"addStudent",component:AddstudentComponent},
  {path:"studentList",component:StudentlistComponent},
  {path:"studentById",component:StudentbyidComponent},
  {path:"deleteStudent",component:DeletestudentComponent},
  {path:"updateStudent",component:UpdatestudentComponent},
  {path:"addSubject",component:AddsubjectComponent},
  {path:"subjectList",component:SubjectlistComponent},
  {path:"subjectById",component:SubjectbyidComponent},
  {path:"deleteSubject",component:DeletesubjectComponent},
  {path:"updateSubject",component:UpdatesubjectComponent},
  {path: "addClass",component:AddclassComponent},
  {path: "classList",component:ClasslistComponent},
  {path: "classById",component:ClassbyidComponent},
  {path: "deleteClass",component:DeleteclassComponent},
  {path:"updateClass",component:UpdateclassComponent},
  {path:"subjectClass",component:ClasssublistComponent},
  {path: "addTeacher",component:AddteacherComponent},
  {path: "teacherList",component:TeacherlistComponent},
  {path: "teacherById",component:TeacherbyidComponent},
  {path: "deleteTeacher",component:DeleteteacherComponent},
  {path:"updateTeacher",component:UpdateteacherComponent},
  {path:"stuteachlist",component:StuteachlistComponent},
  {path:"teacherSubject",component:TeachsublistComponent},
  {path:"updatesubClass", component : UpdateclasssubComponent},
  {path:"updatestuClass",component:UpdatestuclassComponent},
  {path:"updatestuTeacher", component:UpdateteachstuComponent},
  {path:"updatesubTeacher", component: UpdateteachsubComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
