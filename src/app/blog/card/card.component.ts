import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from './../../datasource/post';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  currentPage = 1;
  itemsPerPage = 9;
  pageSize: number;

  @Input() posts: any = [];
  @Output() showPost = new EventEmitter();
  post: Post;

  constructor() { }

  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage * (pageNum - 1);
  }

  public changePagesize(num: number): void {
    this.itemsPerPage = this.pageSize + num;
  }

  viewPost(p) {
    this.showPost.emit(this.post = p);
  }

  ngOnInit() {
  }

}
