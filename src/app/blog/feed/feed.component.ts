import { Component, OnInit } from '@angular/core';
import { FeedService } from './feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts = [];

  constructor(private feedService: FeedService) {

    this.posts = this.feedService.getFeed();
    console.log(this.posts);
  }

  ngOnInit() {
  }

}