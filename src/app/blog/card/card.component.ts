import { Component, OnInit, Input } from '@angular/core';

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

  display = false;

  constructor() { }

  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage * (pageNum - 1);
  }

  public changePagesize(num: number): void {
    this.itemsPerPage = this.pageSize + num;
  }

  showDialog() {
    this.display = true;
  }

  ngOnInit() {
  }

}
