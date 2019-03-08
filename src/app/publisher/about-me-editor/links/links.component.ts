import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { PublisherService } from '../../publisher.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
  providers: [ConfirmationService, MessageService]
})

export class LinksComponent implements OnInit {

  listLink: any = [];
  msgs: Message[] = [];

  constructor(private publisherService: PublisherService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) {

      this.listLink = this.publisherService.getListLink();

    }

  ngOnInit() { }

save(link) {

  if (this.publisherService.getAddLink(link)) {
    this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Successful addition'});
  } else {
    this.messageService.add({severity: 'error', summary: 'Service Message', detail: 'Have empty fields'});
  }

}

delete(id) {
  this.confirmationService.confirm ({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
          this.publisherService.setDeleteLink(id);
          this.msgs = [{severity: 'success', summary: 'Confirmed', detail: 'Record deleted'}];
      },
      reject: () => {
          this.msgs = [{severity: 'info', summary: 'Rejected', detail: 'You have rejected'}];
      }
  });

}

clear() {
  this.messageService.clear();
}


}
