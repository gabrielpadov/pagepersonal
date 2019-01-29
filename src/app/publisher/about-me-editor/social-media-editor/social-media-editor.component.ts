import { Component, OnInit } from '@angular/core';
import {SelectItem, Message, MessageService} from 'primeng/api';
import { SocialMedia } from '../../../datasource/social-media';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-social-media-editor',
  templateUrl: './social-media-editor.component.html',
  styleUrls: ['./social-media-editor.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class SocialMediaEditorComponent implements OnInit {

  medias: SelectItem[];
  selectedMedia: SocialMedia;
  link: string;
  selectedOption: any;
  listMedias: any = [];
  msgs: Message[] = [];

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {
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

  ngOnInit() {
    this.listMedias = [
      {id: 1, media: 'instagram', link: 'www.instagram.com'},
      {id: 2, media: 'facebook', link: 'www.facebook.com'}
    ];
  }

save() {
  console.log('save');
  this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Successful addition'});
}

update() {
  console.log('update');
}

delete() {
  console.log('delete');
}

confirm1() {
  this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.update();
          this.msgs = [{severity: 'info', summary: 'Confirmed', detail: 'Updated record'}];
      },
      reject: () => {
          this.msgs = [{severity: 'info', summary: 'Rejected', detail: 'You have rejected'}];
      }
  });
}

confirm2() {
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
