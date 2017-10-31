import {Injectable} from "@angular/core";
import {STUDENTS} from "./mock-students";
import {Student} from "./Student";

@Injectable()
export class StudentService {

  getStudents(): Student[] {
    return STUDENTS;
  }
}
