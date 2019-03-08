import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Post } from 'src/app/datasource/post';
import { ConfirmationService, MessageService, Message } from 'primeng/api';
import { PublisherService } from '../../publisher.service';
import {NgForm, FormControl} from '@angular/forms';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class PostEditorComponent implements OnInit {

  @Input() updatePost: Post;
  @Output() showPost = new EventEmitter();
  typeahead: FormControl = new FormControl();
  labels: string[];
  suggestions: string[] = [];

  msgs: Message[] = [];
  show = true;
  date: Date;

  constructor(private publisherService: PublisherService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) {
    this.date = new Date();
    // console.log(this.date);
    this.labels = publisherService.getListLabels();
  }

  ngOnInit() {
    // console.log(this.updatePost);
    if (this.updatePost != null) {
      this.toggleButton();
      this.date = this.updatePost.date;
    }
  }

  toBack() {
    this.showPost.emit();
  }

  toggleButton() {
    this.show = !this.show;
  }

  suggest() {
    this.suggestions = this.labels
      .filter(c => c.startsWith(this.typeahead.value))
      .slice(0, 5);
  }

  save(newPost) {

    console.log(newPost.value);

    // this.listMedias.push(this.selectedMedia);

    // this.publisherService.getAddMedias(this.selectedMedia);
    // this.listMedias = this.publisherService.getListMedias();

    this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Successful addition'});
  }

  update(post: Post) {
    this.confirmationService.confirm({
        message: 'Do you want to update this record?',
        header: 'Changes Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
            // this.delete();
            this.msgs = [{severity: 'success', summary: 'Confirmed', detail: 'Record changed'}];
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
