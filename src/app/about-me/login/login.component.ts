import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from '../../datasource/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User = new User();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    // console.log(this.user);
    this.authService.login(this.user);
  }
}
