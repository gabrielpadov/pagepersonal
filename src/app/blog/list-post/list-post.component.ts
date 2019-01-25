import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
/*
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


array = [];
  tam = 10;
  sum = 1;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';
  modalOpen = false;

  constructor() {
    this.appendItems(0, this.sum);
  }
  ngOnInit() { }

  addItems(startIndex, endIndex, _method) {
    for (let i = 0; i < this.sum; ++i) {
      this.array[_method]([i]);
    }
  }

  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'push');
  }

  prependItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'unshift');
  }

  onScrollDown (ev) {
    console.log('scrolled down!!', ev);
    if (this.tam = this.sum) {
    // add another 20 items
    const start = this.sum;
    this.sum += 1;
    this.appendItems(start, this.sum);
    }
    this.direction = 'down';
  }

  onUp(ev) {
    console.log('scrolled up!', ev);
    const start = this.sum;
    this.sum += 1;
    this.prependItems(start, this.sum);

    this.direction = 'up';
  }

}
