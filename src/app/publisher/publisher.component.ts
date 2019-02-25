import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {
  authService: any;
  liberateEdit = false;

  constructor() { }

  ngOnInit() {
    this.authService.liberateEdit.subscribe(
    showUp => this.liberateEdit = showUp
    );
  }

}
