import {Injectable} from "@angular/core";
import {User} from "../models/User";
import {Observable} from "rxjs/Rx";


@Injectable()
export class AuthService {

  private isAuthenticated: boolean = false;

  login(user: User): Observable<any> {
    if (user.login == "admin") {
      this.isAuthenticated = true;
      return Observable.of(this.isAuthenticated);
    } else {
      return Observable.throw(new Error("Unauthorized"));
    }
  }

  getToken(): string {
    console.log(`getToken() | isAuth: ${this.isAuthenticated}`);
    if (this.isAuthenticated) {
      return "asd";
    } else {
      return null;
    }
  }

}
