import { Component, EventEmitter, ElementRef, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import {MaterializeAction} from 'angular2-materialize';
import { User } from './datasource/user';


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
  editShow = false;
  liberateEdit = false;
  user: User = new User();

  modalActions = new EventEmitter<string|MaterializeAction>();

  constructor(private authService: AuthService, private el: ElementRef) {

  }

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
    // console.log(this.user);
    this.authService.login(this.user);
    if (this.liberateEdit) {  this.toggleEdit(); }
  }

  logout() {
    // console.log(this.user);
    this.toggleEdit();
    this.authService.logout();
  }

  toggleEdit () { this.editShow = !this.editShow; }

}
