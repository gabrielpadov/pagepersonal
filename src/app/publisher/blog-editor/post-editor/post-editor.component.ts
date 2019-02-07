import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Post } from 'src/app/datasource/post';
import { ConfirmationService, MessageService, Message } from 'primeng/api';
import { PublisherService } from '../../publisher.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class PostEditorComponent implements OnInit {

  @Input() updatePost: Post;
  @Output() showPost = new EventEmitter();
  filteredCountriesMultiple: any[];
  countries: any[];

   // tslint:disable-next-line:member-ordering
  text1 = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';

  text2: string;
  msgs: Message[] = [];
  show = true;
  date: Date;

  constructor(private publisherService: PublisherService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) {
    this.date = new Date();
    // console.log(this.date);
  }

  ngOnInit() {
    if (this.updatePost) {
      this.toggleButton();
      this.date = this.updatePost.date;
    }
  }

  toBack() {
    this.showPost.emit();
  }

  toggleButton() {
    this.show = !this.show;
  }

  filterCountryMultiple(event) {
    /*
    const query = event.query;
     this.publisherService.getListLabels().then(countries => {
        this.filteredCountriesMultiple = this.filterCountry(query, countries);
     }); */
  }

filterCountry(query, countries: any[]): any[] {
    // in a real application, make a request to a remote
    // url with the query and return filtered results, for demo we filter at client side
    console.log(query);
    const filtered: any[] = [];
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
            filtered.push(country);
        }
    }
    return filtered;
  }


save(newPost: Post) {

  // console.log(this.selectedMedia);

  // this.listMedias.push(this.selectedMedia);

  // this.publisherService.getAddMedias(this.selectedMedia);
  // this.listMedias = this.publisherService.getListMedias();

  this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Successful addition'});
}

update(post: Post) {
  this.confirmationService.confirm({
      message: 'Do you want to update this record?',
      header: 'Changes Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
          // this.delete();
          this.msgs = [{severity: 'success', summary: 'Confirmed', detail: 'Record changed'}];
      },
      reject: () => {
          this.msgs = [{severity: 'info', summary: 'Rejected', detail: 'You have rejected'}];
      }
  });
}

clear() {
  this.messageService.clear();
}

}
