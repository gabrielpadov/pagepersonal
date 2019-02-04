import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.css']
})
export class BlogEditorComponent implements OnInit {
  active = true;

  constructor() { }

  ngOnInit() {
  }

  toggleBlogeditor() {
    this.active = !this.active;
  }
}
