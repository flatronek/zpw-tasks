import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthService} from "./AuthService";


@Injectable()
export class LoginRedirect implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
    if (this.auth.getToken() != null) {
      this.router.navigateByUrl("/products");
      return false;
    } else {
      console.log("LoginRedirect: true");
      return true;
    }
  }

}
