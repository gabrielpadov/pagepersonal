import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  currentPage = 1;
  itemsPerPage = 9;
  pageSize: number;

  posts = [];

  constructor(private blogService: BlogService) {

    this.posts = this.blogService.getList();
    console.log(this.posts);
  }

  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage * (pageNum - 1);
  }

  public changePagesize(num: number): void {
    this.itemsPerPage = this.pageSize + num;
  }
  ngOnInit() {
  }

}
