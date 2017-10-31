import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Student} from "../Student";

@Component({
  selector: 'student-detail',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnChanges {

  @Input() student: Student;

  constructor() {
  }

  ngOnInit() {
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

}
