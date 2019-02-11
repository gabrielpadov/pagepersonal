import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [MessageService]
})
export class UserComponent implements OnInit {
  model: any = {};
  modelM: any = {};
  uploadedFiles: any;
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }

  onSubmitM() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.modelM));
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
