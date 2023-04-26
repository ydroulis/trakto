import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { LoginService } from "./services/login.service";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
  constructor(
    private service: LoginService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (this.service.isLogged()) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
