import { Component, OnInit } from '@angular/core';
import { MessageService, Message } from 'primeng/api';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css'],
  providers: [MessageService]
})
export class InterestsComponent implements OnInit {

  interests: string [];
  msgs: Message[] = [];

  constructor(private messageService: MessageService) {
    this.interests = [ 'dev ops', 'front',
      'back', 'learning Machine'
    ];
  }

  ngOnInit() {
  }

  updateInterests() {
    console.log(this.interests);
    this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Successful addition'});
  // } else {
    // this.messageService.add({severity: 'error', summary: 'Service Message', detail: 'Have empty fields'});
  }

  clear() {
    this.messageService.clear();
  }
}
