import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { PersonalData, ContactRequest } from '../datasource/contact-request';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  countries = ['USA', 'Germany', 'Italy', 'France'];
  requestTypes = ['Claim', 'Feedback', 'Help Request'];

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.createFormGroup();
   // this.contactForm = this.createFormGroupWithBuilder();
   // this.contactForm = this.createFormGroupWithBuilderAndModel();
  }

  ngOnInit() {
  }

  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      personalData: formBuilder.group({
        email: 'defaul@email.com',
        mobile: '',
        country: ''
      }),
      requestType: '',
      text: ''
    });
  }

  createFormGroup() {
    return new FormGroup({
      personalData: new FormGroup({
        email: new FormControl(),
        mobile: new FormControl(),
        country: new FormControl()
        }),
      requestType: new FormControl(),
      text: new FormControl
      });
  }

  createFormGroupWithBuilderAndModel(formBuilder: FormBuilder) {
    return formBuilder.group({
      personalData: formBuilder.group(new PersonalData()),
      requestType: '',
      text: ''
    });
  }

  onSubmit() {
    // Make sure to create a deep copy of the form-model
    const result: ContactRequest = Object.assign({}, this.contactForm.value);
    result.personalData = Object.assign({}, result.personalData);

    // Do useful stuff with the gathered data
    console.log(result);
  }

  revert() {
    // Resets to blank object
    this.contactForm.reset();

    // Resets to provided model
    this.contactForm.reset({ personalData: new PersonalData(), requestType: '', text: '' });
  }
}
