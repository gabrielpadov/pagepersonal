import { BlogService } from './blog.service';
import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../datasource/post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  modalPost: Post;
  showBlog = true;
  display = false;
  listPost: object [];
  listLabel: object [];
  listLink: object [];

  constructor(private blogService: BlogService) {
    this.listPost = blogService.getListPost();
    this.listLabel = blogService.getListLabel();
    this.listLink = blogService.getListLink();
  }

  ngOnInit() { }

  toggleShowBlog() {
    this.showBlog = !this.showBlog;
  }

  reciverPost(showPost) {
    this.modalPost = showPost;
    this.showDialog();
  }

  showDialog() {
    this.display = true;
}

}
