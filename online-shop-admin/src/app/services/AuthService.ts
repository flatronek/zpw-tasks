import {Injectable} from "@angular/core";
import {User} from "../models/User";
import {Observable} from "rxjs/Rx";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {tap} from "rxjs/operators";

export const HTTP_OPTIONS = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {

  private authUrl = "http://localhost:3000/login";
  private authHeader: string;

  constructor(private http: HttpClient) {
  }

  login(user: User): Observable<any> {
    let passEnc = btoa(user.login + ":" + user.password);
    let authHeader = "Basic " + passEnc;
    //
    // HTTP_OPTIONS.headers.append("Authorization", authHeader);
    //
    // return this.http.post<any>(this.authUrl, HTTP_OPTIONS)
    //   .pipe(
    //     tap(_ => {
    //       this.authHeader = authHeader;
    //     })
    //   );

    if (user.login == "admin" && user.password == "admin") {
      this.authHeader = authHeader;
      return Observable.of(true);
    } else {
      return Observable.throw(new Error("Unauthorized"));
    }
  }

  getToken(): string {
    return this.authHeader;
  }

}
