import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css']
})
export class PostEditorComponent implements OnInit {

   // tslint:disable-next-line:member-ordering
   text1 = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';

   text2: string;

  constructor() { }

  ngOnInit() {
  }

}
