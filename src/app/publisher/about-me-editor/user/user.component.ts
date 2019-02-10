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
  uploadedFiles: any[] = [];
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }

  onSubmit1() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.modelM));
  }

  constructor(private messageService: MessageService) {}

  onUpload(event) {
      for (const file of event.files) {
          this.uploadedFiles.push(file);
      }

      this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  ngOnInit() { }

}
