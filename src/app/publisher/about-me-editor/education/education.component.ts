import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  dateStart: Date;

  dateEnd: Date;

  date1: Date;
  date2: Date;

  constructor() { }

  ngOnInit() {
  }

}
