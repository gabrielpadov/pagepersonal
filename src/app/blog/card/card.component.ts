import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private blogService: BlogService) {

    this.posts = this.blogService.getList();
    console.log(this.posts);
  }

  posts = [];
  title = 'Card Title';

  ngOnInit() {
  }

}
