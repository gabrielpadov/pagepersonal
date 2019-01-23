import { Component, OnInit, EventEmitter } from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';
import { AuthService } from './login/auth.service';
import { User } from '../datasource/user';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {

  private user: User = new User();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  modalActions = new EventEmitter<string|MaterializeAction>();
  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

  login(){
    this.closeModal();
    //console.log(this.user);
    this.authService.login(this.user);
  }


}

