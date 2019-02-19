import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [MessageService]
})
export class UserComponent implements OnInit {
  modelUser: any = {};
  modelFooter: any = {};
  modelHome: any = {};
  uploadedFiles: any;

  onSubmitUser() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.modelUser));
  }

  onSubmitFooter() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.modelFooter));
  }

  onSubmitHome() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.modelHome));
  }

  constructor(private messageService: MessageService) {}

  onUpload(event) {
     // for (const file of event.files) {
          this.uploadedFiles = event.file;
      // }
    console.log(event);
    console.log(event.file);
    console.log(this.uploadedFiles);
      this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  ngOnInit() { }

}
