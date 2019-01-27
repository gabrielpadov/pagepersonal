import { Component, OnInit } from '@angular/core';
import { AuthService } from '../about-me/login/auth.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  showBlog = true;

  liberateEdit = false;

  // display = false;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
   // this.authService.liberateEdit.subscribe(
   //   showUp => this.liberateEdit = showUp
  //  );
  }

  toggleShowBlog() {
    this.showBlog = !this.showBlog;
  }

  /*
  showDialog() {
      this.display = true;
  }*/

}
