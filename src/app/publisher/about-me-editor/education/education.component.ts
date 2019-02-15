import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  providers: [MessageService]
})
export class EducationComponent implements OnInit {

  dateStart: Date;
  dateEnd: Date;
  educationForm: FormGroup;
  submitted: boolean;
  message: string;
  Actual = false;

  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.educationForm = this.fb.group({
        'institution': new FormControl('', Validators.required),
        'course': new FormControl('', Validators.required),
        'dateStart': new FormControl(''),
        'dateEnd': new FormControl(''),
        'description': new FormControl('', Validators.required),
        'note': new FormControl('', Validators.required)
    });
  }

  get diagnostic() { return JSON.stringify(this.educationForm.value); }

  onSubmit(value) {
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

}
