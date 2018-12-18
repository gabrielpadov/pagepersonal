import { Injectable, EventEmitter } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import { toast } from 'angular2-materialize';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuth: boolean = false;

  liberateEdit = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  login(user:User){
    if( user.name === 'root' && user.password === '123'){
      this.userAuth = true;
      this.liberateEdit.emit(true);
      this.router.navigate(['about-me/form']);
      toast('Great!', 4000);
    }
    else{
      this.userAuth = false;
      this.liberateEdit.emit(false);
      //this.router.navigate(['/']);
      toast('Invalid!', 4000);
    }
  }

  logout(){
    this.userAuth = false;
    this.router.navigate(['']);
    toast('Lougout ok!', 4000);
  }

  usuarioAutenticado(){
    return this.userAuth;
  }

}
