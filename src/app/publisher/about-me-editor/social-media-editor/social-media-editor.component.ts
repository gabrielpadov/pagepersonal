import { SocialMedia } from './../../../datasource/social-media';
import { Component, OnInit, Input } from '@angular/core';
import {SelectItem, Message, MessageService} from 'primeng/api';
import {ConfirmationService} from 'primeng/api';
import { PublisherService } from '../../publisher.service';

@Component({
  selector: 'app-social-media-editor',
  templateUrl: './social-media-editor.component.html',
  styleUrls: ['./social-media-editor.component.css'],
  providers: [ConfirmationService, MessageService]
})

export class SocialMediaEditorComponent implements OnInit {

  selectedMedia: any = {
    link: '',
    media: '',
  };

  medias: SelectItem[];
  listMedias: any = [];
  msgs: Message[] = [];
  aux: SocialMedia;

  constructor(private publisherService: PublisherService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) {

      this.listMedias = this.publisherService.getListMedias();

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

  ngOnInit () { }

save(m) {

  // console.log(this.selectedMedia);

  // this.listMedias.push(this.selectedMedia);

  this.publisherService.getAddMedias(this.selectedMedia);
  this.listMedias = this.publisherService.getListMedias();

  this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Successful addition'});
}

delete() {
  this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
          this.delete();
          this.msgs = [{severity: 'info', summary: 'Confirmed', detail: 'Record deleted'}];
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
