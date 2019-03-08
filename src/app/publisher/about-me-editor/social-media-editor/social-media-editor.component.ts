import { SocialMedia } from './../../../datasource/social-media';
import { Component, OnInit } from '@angular/core';
import { SelectItem, Message, MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { PublisherService } from '../../publisher.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-social-media-editor',
  templateUrl: './social-media-editor.component.html',
  styleUrls: ['./social-media-editor.component.css'],
  providers: [ConfirmationService, MessageService]
})

export class SocialMediaEditorComponent implements OnInit {

  medias: SelectItem[];
  listMedia: any = [];
  msgs: Message[] = [];

  constructor(private publisherService: PublisherService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) {

      this.listMedia = this.publisherService.getListMedia();

      this.medias = [
        {label: 'Select Media', value: null},
        {label: 'Instagram', value: 'instagram'},
        {label: 'Facebook', value: 'facebook'},
        {label: 'Twitter', value: 'twitter'},
        {label: 'Youtube', value: 'youtube'},
        {label: 'Steam', value: 'Steam'},
        {label: 'Reddit', value: 'reddit'},
        {label: 'Dropbox', value: 'dropbox'},
        {label: 'Linkedin', value: 'linkedin'},
        {label: 'Github', value: 'github'},
        {label: 'Spotify', value: 'spotify'},
        {label: 'Slack', value: 'slack'},
        {label: 'Bitbucket', value: 'bitbucket'}
      ];
    }

  ngOnInit() { }

save(selectedMedia: NgForm) {

  console.log(selectedMedia.value);

  if (this.publisherService.getAddMedia(selectedMedia)) {
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
          this.publisherService.setDeleteMedia(id);
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
