import { Component, Input, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  @Input() posts: any[];
  @Input() labels: any;

  types: SelectItem[];
  selectedType: string;

  constructor() {

    this.types = [
      {label: 'Paypal', value: 'PayPal', icon: 'fa fa-fw fa-cc-paypal'},
      {label: 'Visa', value: 'Visa', icon: 'fa fa-fw fa-cc-visa'},
      {label: 'MasterCard', value: 'MasterCard', icon: 'fa fa-fw fa-cc-mastercard'}
    ];

  }

  clear() {
    this.selectedType = null;
  }

  ngOnInit() {
    console.log(this.labels);
  }

  filterLabel(label: string) {
    console.log(label);
  }

}
/*list:Array<YourObject>=loadYourList();

filtered:Array<YourObject> = list.filter(x=>x.team1Id=='yourID'&& x.team2Id=='your_id'); */
