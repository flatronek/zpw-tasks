import {Component} from '@angular/core';

@Component({
  selector: 'hello-root',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  firstName = "Jan";
  lastName = "Kowalski";

  group: Student[] = [
    new Student("Jan", "Kowalski", 3.0),
    new Student("Jan", "Kowalski", 2.0),
    new Student("Kasia", "Kasia", 4.5),
    new Student("Ania", "Ania", 5.0)
  ];
}


class Student {

  firstName: string;
  lastName: string;
  grade: number;

  constructor(firstName: string, lastName: string, grade: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
  }
}
