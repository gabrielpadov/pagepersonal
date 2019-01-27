import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  originalPosts: any = [];
  posts: any = [];

  constructor(private blogService: BlogService) {

    this.originalPosts = this.blogService.getList();
    this.posts = this.originalPosts.slice(0, 1);

  }

  ngOnInit() { }

  onScrollDown() {
    if (this.posts.length < this.originalPosts.length) {

      const len = this.posts.length;

      for (let i = len; i <= len + 1; i++) {
        this.posts.push(this.originalPosts[i]);
      }
    }
  }
}
  /*
  posts: any = [];
  array: any = [];
  p: any;
  sum = 1;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';
  modalOpen = false;

  constructor(private blogService: BlogService) {

    this.posts = this.blogService.getList();
    this.addPost(0);

  }
  ngOnInit() { }

  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'push');
  }

  addItems(startIndex, endIndex, _method) {
    for (let i = 0; i < this.sum; ++i) {
      this.array[_method]([i]);
    }
    this.p = this.posts [this.sum - 1];
  }

  prependItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'unshift');
  }

  onScrollDown (ev) {
    // console.log('scrolled down!!', ev);
    // add another 20 items
    // const start = this.sum;
    this.sum += 1;
    // this.appendItems(start, this.sum);
    // this.direction = 'down';
    this.addPost(this.sum);
  }

  addPost(n: number) {
    this.p = this.posts[n];
  }


constructor(private blogService: BlogService) {

  this.posts = this.blogService.getList();
  console.log(this.posts);
}

posts = [];
page = 1;
selector = '.main-panel';

ngOnInit() { }

onScroll() {
    console.log('Scrolled');
    this.page = this.page + 1;
}
*/
