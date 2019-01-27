import { Component, OnInit } from '@angular/core';
import { BlogService } from './../blog.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts = [];

  constructor(private blogService: BlogService) {

    this.posts = this.blogService.getList();
    // console.log(this.posts);
  }

  ngOnInit() {
  }

}
