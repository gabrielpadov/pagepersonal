import { Component, OnInit } from '@angular/core';
import { BlogService } from './../blog.service';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts = [];

    
  types: SelectItem[];
  
    selectedType: string;

    selectedModes: string[];

    modes: SelectItem[];


  constructor(private blogService: BlogService) {

    this.posts = this.blogService.getList();
    // console.log(this.posts);
    this.types = [
      {label: 'Paypal', value: 'PayPal', icon: 'fa fa-fw fa-cc-paypal'},
      {label: 'Visa', value: 'Visa', icon: 'fa fa-fw fa-cc-visa'},
      {label: 'MasterCard', value: 'MasterCard', icon: 'fa fa-fw fa-cc-mastercard'}
  ];
  this.modes = [
    {value: 'Bold', title: 'Bold', icon: 'fa fa-fw fa-bold'},
    {value: 'Italic', title: 'Italic', icon: 'fa fa-fw fa-italic'},
    {value: 'Underline', title: 'Underline', icon: 'fa fa-fw fa-underline'}
  ];
  }

  clear() {
    this.selectedType = null;
  }

  ngOnInit() {
  }

}
