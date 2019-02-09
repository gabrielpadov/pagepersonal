import { Post } from './../../datasource/post';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  @Input() posts: any[];
  @Input() labels: any;
  @Output() showPost = new EventEmitter();
  auxPost: any[];
  aux: any;
  aux2;
  aux3: string;
  post: Post;

  constructor() {  }

  ngOnInit() {
    if (this.posts) {
      this.auxPost = this.posts;
    }
   }

  filterLabel(l: string) {

    this.auxPost = [];

    if (l === 'Recent') {
      this.auxPost = this.posts;
    } else {
      for (let i = 0; i < this.posts.length; i++) {
          this.aux = this.posts[i].label.filter(x => x.includes(l));
        if (l === this.aux[0]) {
            this.auxPost.push(this.posts[i]);
        }
      }
    }
  }

  viewPost(p) {
    this.showPost.emit(this.post = p);
  }

}
