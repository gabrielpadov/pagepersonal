import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  display = false;

  constructor() { }

  ngOnInit() {
  }

  showDialog() {
    this.display = true;
  }

  postView() {
    console.log('ok!');
    this.showDialog();
  }

  postDelete() {
    console.log('delete');
  }

  postUpdate() {
    console.log('update');
  }
}
