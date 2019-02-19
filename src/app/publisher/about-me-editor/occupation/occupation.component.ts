import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { MessageService, Message } from 'primeng/api';

@Component({
  selector: 'app-occupation',
  templateUrl: './occupation.component.html',
  styleUrls: ['./occupation.component.css'],
  providers: [MessageService]
})
export class OccupationComponent implements OnInit {

  dateStart: Date;
  dateEnd: Date;
  dateComp: Date;
  occupationForm: FormGroup;
  submitted: boolean;
  message: string;
  dateDisabled = false;
  msgs: Message[] = [];

  listOccupation: any = [
    {'id': '0', 'company': 'Lorem ipsum dolor',
    'dateStart': '06/02/2017', 'dateEnd': '',
    'office': 'Duis maximus suscipit nisi', 'description': 'suscipit nisi photograph',
    'sector': 'Vestibulum placerat posuere urna vel scelerisque. Lorem ipsum dolor sit' },
    {'id': '1', 'company': 'Lorem ipsum dolor Lorem ipsum dolor',
    'dateStart': '06/02/2015', 'dateEnd': '06/02/2016',
    'office': 'Duis maximus suscipit nisi', 'description': 'Lorem ipsum dolor suscipit nisi photograph',
    'sector': 'Vestibulum placerat posuere urna vel scelerisque. Lorem ipsum dolor sit amet' },
    {'id': '1', 'company': 'Lorem ipsum dolor Lorem ipsum dolor',
    'dateStart': '06/02/2013', 'dateEnd': '06/02/2014',
    'office': 'Duis maximus suscipit nisi', 'description': 'Lorem ipsum dolor suscipit nisi photograph',
    'sector': 'Vestibulum placerat posuere urna vel scelerisque. Lorem ipsum dolor sit amet' }
  ];

  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.occupationForm = this.fb.group({
        'company': new FormControl('', Validators.required),
        'office': new FormControl('', Validators.required),
        'dateStart': new FormControl('', Validators.required),
        'dateEnd': new FormControl('', Validators.required),
        'sector': new FormControl('', Validators.required),
        'description': new FormControl('')
    });
  }

  get diagnostic() { return JSON.stringify(this.occupationForm.value); }

  onOccupation(value) {
    console.log(value);
      this.submitted = true;
      this.messageService.add({severity: 'info', summary: 'Success',
        detail: 'Form Submitted'});
     // this.educationForm.reset();
      /* this.educationService.sendMessage(value).subscribe(() => {
        console.log('Formulario de contacto', 'Mensaje enviado correctamente', 'success');
       });
     } */
  }

  showResponse(event) {
    this.messageService.add({severity: 'info', summary: 'Succees', detail: 'User Responded', sticky: true});
  }

  toogleDateEnd() {
    this.dateDisabled = !this.dateDisabled;
  }

  deleteOccupation(id) {
    console.log(id);
    this.msgs = [{severity: 'success', summary: 'Confirmed', detail: 'Record deleted'}];
  }

}
