import { Component, EventEmitter, ElementRef, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import {MaterializeAction} from 'angular2-materialize';
import { User } from './datasource/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  name = 'pagepersonal';
  user_email = 'personal@email.com';
  work_email = 'work@email.com';
  title_footer = 'Footer Content';
  text_footer = 'You can use rows and columns here to organize your footer content.';

  liberateEdit = false;
  user: User = new User();

  modalActions = new EventEmitter<string|MaterializeAction>();

  constructor(
    private authService: AuthService,
    private el: ElementRef,
    private router: Router
    ) { }

  ngOnInit() {
    this.authService.liberateEdit.subscribe(
      showUp => this.liberateEdit = showUp
    );
  }

  openModal() {
    this.modalActions.emit({action: 'modal', params: ['open']});
  }
  closeModal() {
    this.modalActions.emit({action: 'modal', params: ['close']});
  }

  login() {
    this.closeModal();
    this.authService.login(this.user);
  }

  logout() {
    this.authService.logout();
  }


}
