import { Post } from './../../../datasource/post';
import { Component, OnInit, Input } from '@angular/core';
import { MessageService, ConfirmationService, Message } from 'primeng/api';
import { PublisherService } from '../../publisher.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class PostViewComponent implements OnInit {

  @Input() postList: Post [];
  updatePost: Post;
  post: Post;
  display = false;
  show = true;
  currentPage = 1;
  itemsPerPage = 5;
  pageSize: number;
  msgs: Message[] = [];

  constructor(private publisherService: PublisherService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit() { this.updatePost = null; }

  reciverEdit() {
    this.showEdit();
  }

  showDialog() {
    this.display = true;
  }

  showEdit() {
    this.show = !this.show;
  }

  postView(p: Post) {
    this.post = p;
    this.showDialog();
  }

  postDelete(id) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
          this.publisherService.setDeletePost(id);
          this.msgs = [{severity: 'success', summary: 'Confirmed', detail: 'Record deleted'}];
      },
      reject: () => {
          this.msgs = [{severity: 'info', summary: 'Rejected', detail: 'You have rejected'}];
      }
    });
  }

  postUpdate(p) {
    this.updatePost = p;
    this.showEdit();
  }

  postNew() {
    this.showEdit();
  }

  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage * (pageNum - 1);
  }

  public changePagesize(num: number): void {
    this.itemsPerPage = this.pageSize + num;
  }

clear() {
  this.messageService.clear();
}

}
