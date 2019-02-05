import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../datasource/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post;

  constructor() {

  }

  ngOnInit() {

  }

}
