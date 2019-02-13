import {Component, OnInit} from '@angular/core';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {MessageService, SelectItem} from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [MessageService]
})
export class ContactComponent implements OnInit {

    contactForm: FormGroup;

    submitted: boolean;

    message: string;

    constructor(private fb: FormBuilder, private messageService: MessageService) { }

    ngOnInit() {
        this.contactForm = this.fb.group({
            'name': new FormControl('', Validators.required),
            'email': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
            'message': new FormControl('', Validators.required)
        });
    }

    onSubmit(value: string) {
        this.submitted = true;
        this.messageService.add({severity: 'info', summary: 'Success',
          detail: 'Form Submitted'});
    }

    get diagnostic() { return JSON.stringify(this.contactForm.value); }

    showResponse(event) {
      this.messageService.add({severity: 'info', summary: 'Succees', detail: 'User Responded', sticky: true});
  }
}
