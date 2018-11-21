import { Component, EventEmitter, ElementRef } from '@angular/core';
import { AuthService } from './about-me/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'pagepersonal';
  user_email = 'personal@email.com';
  work_email = 'work@email.com';

  liberateEdit: boolean = false;

  constructor(private authService: AuthService,private el: ElementRef) {

  }

  ngOnInit(){
    this.authService.liberateEdit.subscribe(
      showUp => this.liberateEdit = showUp
    );
  }

  logout(){
    //console.log(this.user);
    this.authService.logout();
  }

}

