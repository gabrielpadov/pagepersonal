import { Injectable } from '@angular/core';

@Injectable()

export class BlogService {

  listPost: any = [
    // tslint:disable-next-line:max-line-length
    {'id': '1', 'title': 'Lorem ipsum dolor sit amet', 'date': '01/01/2019', 'preview': 'Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.', 'label': [ 'music', 'verse' , 'music', 'photograph'], 'content': '<p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><br><p>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.<br><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><br><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><br><p>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.<br><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><br><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><br><p>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.<br><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><br><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><br><p>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.<br><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><br><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><br><p>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.<br><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><br><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><br><p>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.<br><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><br><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><br><p>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.<br><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><br><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><br><p>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.<br><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><br><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><br><p>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.<br><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><br><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><br><p>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.<br><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><br><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><br><p>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.<br><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><br><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p><br><p>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.<br><p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p>' },
    // tslint:disable-next-line:max-line-length
    {'id': '2', 'title': 'Lorem ipsum dolor', 'date': '06/02/2019', 'preview': 'Duis maximus suscipit nisi', 'label': [ 'photograph', 'music'] },
    // tslint:disable-next-line:max-line-length
    {'id': '3', 'title': 'Vestibulum placerat posuere urna vel scelerisque.', 'date': '21/02/2019', 'preview': '', 'label': [ 'dev', 'music'] },
    {'id': '4', 'title': 'Vestibulum placerat', 'date': '08/03/2019', 'preview': 'Vestibulum placerat posuere', 'label': [ 'music'] },
    // tslint:disable-next-line:max-line-length
    {'id': '5', 'title': 'Lorem ipsum dolor', 'date': '06/02/2019', 'preview': 'Duis maximus suscipit nisi', 'label': [ 'literature', 'music'] },
    // tslint:disable-next-line:max-line-length
    {'id': '6', 'title': 'Lorem ipsum', 'date': '18/02/2019', 'preview': 'Vestibulum placerat posuere urna vel scelerisque.', 'label': [ 'photograph'] },
    // tslint:disable-next-line:max-line-length
    {'id': '7', 'title': 'Lorem ipsum dolor sit amet', 'date': '01/01/2019', 'preview': 'Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.', 'label': [ 'photograph'] },
    // tslint:disable-next-line:max-line-length
    {'id': '8', 'title': 'Vestibulum placerat posuere urna vel scelerisque. Lorem ipsum dolor sit amet', 'date': '21/02/2019', 'preview': '', 'label': [ 'verse' , 'music', 'photograph' ] },
    {'id': '9', 'title': 'Vestibulum placerat', 'date': '08/03/2019', 'preview': 'Vestibulum placerat posuere', 'label': [ 'dev'] },
    {'id': '10', 'title': 'Lorem ipsum dolor', 'date': '06/02/2019', 'preview': 'Duis maximus suscipit nisi', 'label': [ 'dev' ] },
    // tslint:disable-next-line:max-line-length
    {'id': '11', 'title': 'Lorem ipsum', 'date': '18/02/2019', 'preview': 'Vestibulum placerat posuere urna vel scelerisque.', 'label': [ 'music'] },
    {'id': '12', 'title': 'Vestibulum placerat posuere urna vel scelerisque.', 'date': '21/02/2019', 'preview': '', 'label': [ 'dev', ] },
    {'id': '13', 'title': 'Vestibulum placerat', 'date': '08/03/2019', 'preview': 'Vestibulum placerat posuere', 'label': [ 'music'] }
  ];

  listLabel: any = [
    { id: '1', label: 'literature' },
    { id: '2', label: 'photograph' },
    { id: '3', label: 'verse' },
    { id: '4', label: 'dev' },
    { id: '5', label: 'music' }
  ];

  listLink: any = [
    { id: '1', link: 'https://angular.io/', name: 'Angular' },
    { id: '2', link: 'https://www.typescriptlang.org/', name: 'Typescript' },
    { id: '3', link: 'https://www.primefaces.org/primeng/#/', name: 'PrimeNG' }
  ];

  constructor() { }

  getListLabel() {
    return this.listLabel;
  }

  getListPost() {
    return this.listPost;
  }

  getListLink() {
    return this.listLink;
  }
}
