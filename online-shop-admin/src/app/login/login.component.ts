import { Component, OnInit } from '@angular/core';
import {User} from '../models/User';
import {AuthService} from "../services/AuthService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  onLoginPressed() {
    console.log(`Login: ${JSON.stringify(this.user)}`);
    this.auth.login(this.user)
      .subscribe(_ => {
        this.router.navigateByUrl("/products");
      }, error => {
        console.log("Login failed.");
        alert("Login error: " + error.message);
      })
  }
}
