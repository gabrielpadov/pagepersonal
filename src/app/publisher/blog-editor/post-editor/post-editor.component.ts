import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css']
})
export class PostEditorComponent implements OnInit {

  @Output() showPost = new EventEmitter();
  filteredCountriesMultiple: any[];
  countries: any[];

   // tslint:disable-next-line:member-ordering
  text1 = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';

  text2: string;
  show = true;
  date: Date;

  constructor() {
    this.date = new Date();
    // console.log(this.date);
  }

  ngOnInit() { }

  toBack() {
    this.showPost.emit();
  }

  toggleButton() {
    this.show = !this.show;
  }

  filterCountryMultiple(event) {
    // const query = event.query;
    // this.countryService.getCountries().then(countries => {
    //    this.filteredCountriesMultiple = this.filterCountry(query, countries);
    // });
}

filterCountry(query, countries: any[]): any[] {
    // in a real application, make a request to a remote
    // url with the query and return filtered results, for demo we filter at client side
    const filtered: any[] = [];
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
            filtered.push(country);
        }
    }
    return filtered;
}
}
