import { Student } from './student';
import { Subject } from './subject';

export class Class {
    classId : number;
    className : string;
    students : Student[];
    subjectList : Subject[];
}
