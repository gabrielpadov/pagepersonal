import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  interests: string [];

  constructor() {
    this.interests = [ 'dev ops', 'front',
      'back', 'learning Machine'
    ];
  }

  ngOnInit() {
  }

  updateInterests() {
    console.log(this.interests);
  }

}
