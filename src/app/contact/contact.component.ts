import { ContactService } from './contact.service';
import {Component, OnInit} from '@angular/core';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [MessageService]
})
export class ContactComponent implements OnInit {

    constructor(private fb: FormBuilder, private messageService: MessageService, public contactService: ContactService) { }

    contactForm: FormGroup;

    submitted: boolean;

    message: string;

    ngOnInit() {
        this.contactForm = this.fb.group({
            'name': new FormControl('', Validators.required),
            'email': new FormControl('', Validators.compose([Validators.required, Validators.email])),
            'message': new FormControl('', Validators.required)
        });
    }

    get diagnostic() { return JSON.stringify(this.contactForm.value); }

    onSubmit(value) {
        this.submitted = true;
        this.messageService.add({severity: 'info', summary: 'Success',
          detail: 'Form Submitted'});
       // this.contactForm.reset();
        /* this.contactService.sendMessage(value).subscribe(() => {
          console.log('Formulario de contacto', 'Mensaje enviado correctamente', 'success');
         });
       } */
    }

    showResponse(event) {
      this.messageService.add({severity: 'info', summary: 'Succees', detail: 'User Responded', sticky: true});
    }

}
