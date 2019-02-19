import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { MessageService, Message } from 'primeng/api';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  providers: [MessageService]
})
export class EducationComponent implements OnInit {

  dateStart: Date;
  dateEnd: Date;
  dateComp: Date;
  educationForm: FormGroup;
  complementForm: FormGroup;
  submitted: boolean;
  message: string;
  dateDisabled = false;
  msgs: Message[] = [];

  listEducation: any = [
    {'id': '0', 'institution': 'Lorem ipsum dolor',
    'dateStart': '06/02/2017', 'dateEnd': '',
    'course': 'Duis maximus suscipit nisi', 'description': 'suscipit nisi photograph',
    'note': 'Vestibulum placerat posuere urna vel scelerisque. Lorem ipsum dolor sit' },
    {'id': '1', 'institution': 'Lorem ipsum dolor Lorem ipsum dolor',
    'dateStart': '06/02/2015', 'dateEnd': '06/02/2016',
    'course': 'Duis maximus suscipit nisi', 'description': 'Lorem ipsum dolor suscipit nisi photograph',
    'note': 'Vestibulum placerat posuere urna vel scelerisque. Lorem ipsum dolor sit amet' },
    {'id': '1', 'institution': 'Lorem ipsum dolor Lorem ipsum dolor',
    'dateStart': '06/02/2013', 'dateEnd': '06/02/2014',
    'course': 'Duis maximus suscipit nisi', 'description': 'Lorem ipsum dolor suscipit nisi photograph',
    'note': 'Vestibulum placerat posuere urna vel scelerisque. Lorem ipsum dolor sit amet' }
  ];

  listComplement: any = [
    {'id': '0', 'institution': 'Lorem ipsum dolor Lorem ipsum',
    'conclusion': '06/02/2019', 'course': 'Duis maximus suscipit nisi',
    'note': 'Vestibulum placerat posuere urna vel scelerisque. Lorem ipsum dolor sit' },
    {'id': '1', 'institution': 'Lorem ipsum dolor',
    'conclusion': '06/02/2019', 'course': 'Duis maximus',
    'note': '' }
  ];

  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.educationForm = this.fb.group({
        'institution': new FormControl('', Validators.required),
        'course': new FormControl('', Validators.required),
        'dateStart': new FormControl('', Validators.required),
        'dateEnd': new FormControl('', Validators.required),
        'description': new FormControl('', Validators.required),
        'note': new FormControl('')
    });
    this.complementForm = this.fb.group({
      'institution': new FormControl('', Validators.required),
      'course': new FormControl('', Validators.required),
      'dateComp': new FormControl('', Validators.required),
      'note': new FormControl('')
    });
  }

  get diagnostic() { return JSON.stringify(this.educationForm.value); }
  get diagnostic1() { return JSON.stringify(this.complementForm.value); }

  onEducation(value) {
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

  onComplement(value) {
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

  deleteEducation(id) {
    console.log(id);
    this.msgs = [{severity: 'success', summary: 'Confirmed', detail: 'Record deleted'}];
  }

  deleteComplement(id) {
    console.log(id);
    this.msgs = [{severity: 'success', summary: 'Confirmed', detail: 'Record deleted'}];
  }
}
