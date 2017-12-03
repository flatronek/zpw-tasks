import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./AuthService";

@Injectable()
export class EnsureAuthenticated implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // if (this.auth.getToken() != null) {
    //   console.log("EnsureAuth: true");
    //   return true;
    // } else {
    //   this.router.navigateByUrl("/login");
    //   return false;
    // }
    return true;
  }
}
