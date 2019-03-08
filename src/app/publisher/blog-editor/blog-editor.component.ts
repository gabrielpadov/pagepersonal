import { Component, OnInit } from '@angular/core';
import { PublisherService } from '../publisher.service';
import { Post } from 'src/app/datasource/post';

@Component({
  selector: 'app-blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.css']
})
export class BlogEditorComponent implements OnInit {

  postList: Post [];

  constructor(publisherService: PublisherService) {
    this.postList = publisherService.getListPost(); }

  ngOnInit() {
  }

}
