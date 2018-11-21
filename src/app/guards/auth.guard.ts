import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../about-me/login/auth.service";
import { toast } from "angular2-materialize";


@Injectable()

export class AuthGuard implements CanActivate{

  constructor(
    private authService: AuthService,
    private router: Router
    ){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean{

    if(this.authService.usuarioAutenticado()){
      return true;
    }

    this.router.navigate(['about-me'])
    toast("user without authentication",4000);
    return false;
  }
}