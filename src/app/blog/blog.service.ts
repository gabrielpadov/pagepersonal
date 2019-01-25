import { Injectable } from '@angular/core';

@Injectable()

export class BlogService {

  list: any = [
    // tslint:disable-next-line:max-line-length
    {'id': '1', 'title': 'Lorem ipsum dolor sit amet', 'date': '01/01/2019', 'preview': 'Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.'},
    {'id': '2', 'title': 'Lorem ipsum dolor', 'date': '06/02/2019', 'preview': 'Duis maximus suscipit nisi'},
    {'id': '3', 'title': 'Vestibulum placerat posuere urna vel scelerisque.', 'date': '21/02/2019', 'preview': ''},
    {'id': '4', 'title': 'Vestibulum placerat', 'date': '08/03/2019', 'preview': 'Vestibulum placerat posuere'},
    {'id': '5', 'title': 'Lorem ipsum dolor', 'date': '06/02/2019', 'preview': 'Duis maximus suscipit nisi'},
    {'id': '6', 'title': 'Lorem ipsum', 'date': '18/02/2019', 'preview': 'Vestibulum placerat posuere urna vel scelerisque.'},
    // tslint:disable-next-line:max-line-length
    {'id': '1', 'title': 'Lorem ipsum dolor sit amet', 'date': '01/01/2019', 'preview': 'Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.'},
    // tslint:disable-next-line:max-line-length
    {'id': '7', 'title': 'Vestibulum placerat posuere urna vel scelerisque. Lorem ipsum dolor sit amet', 'date': '21/02/2019', 'preview': ''},
    {'id': '8', 'title': 'Vestibulum placerat', 'date': '08/03/2019', 'preview': 'Vestibulum placerat posuere'},
    {'id': '9', 'title': 'Lorem ipsum dolor', 'date': '06/02/2019', 'preview': 'Duis maximus suscipit nisi'},
    {'id': '10', 'title': 'Lorem ipsum', 'date': '18/02/2019', 'preview': 'Vestibulum placerat posuere urna vel scelerisque.'},
    {'id': '11', 'title': 'Vestibulum placerat posuere urna vel scelerisque.', 'date': '21/02/2019', 'preview': ''},
    {'id': '12', 'title': 'Vestibulum placerat', 'date': '08/03/2019', 'preview': 'Vestibulum placerat posuere'}
  ];

  constructor() { }

  getList() {
    return this.list;
  }
}
