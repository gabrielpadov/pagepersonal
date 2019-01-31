import { BlogService } from './blog.service';
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

  listPost: object [];
  listLabel: object [];

  constructor(private authService: AuthService, private blogService: BlogService) {
    this.listPost = blogService.getList();
    this.listLabel = blogService.getListLabel();
  }

  ngOnInit() {
   // this.authService.liberateEdit.subscribe(
   //   showUp => this.liberateEdit = showUp
  //  );
  }

  toggleShowBlog() {
    this.showBlog = !this.showBlog;
  }


}
