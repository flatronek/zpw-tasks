import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Student} from "./Student";
import {StudentService} from "./student.service";

@Component({
  selector: 'group-root',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  providers: [StudentService]
})
export class GroupComponent implements OnInit, OnChanges {

  firstName = "Jan";
  lastName = "Kowalski";

  selectedStudent: Student;
  group: Student[];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.group = this.studentService.getStudents();
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let changedProp in changes) {
      console.log(`Changed prop ${changedProp}`);
      let change = changes[changedProp];
      let preChange = JSON.stringify(change.previousValue);
      let currentVal = JSON.stringify(change.currentValue);
      console.log(`Changed ${preChange} to ${currentVal}`);
    }
  }

  onStudentSelected(student: Student): void {
    this.selectedStudent = student;
  }
}
