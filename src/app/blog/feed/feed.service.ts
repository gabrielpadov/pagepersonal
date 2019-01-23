import { Injectable } from '@angular/core';

@Injectable()

export class FeedService {

  constructor() { }

  getFeed() {
    return [
      // tslint:disable-next-line:max-line-length
      {'id': '1', 'title': 'Lorem ipsum dolor sit amet', 'date': '01/01/2019', 'preview': 'Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.'},
      {'id': '2', 'title': 'Lorem ipsum dolor', 'date': '06/02/2019', 'preview': 'Duis maximus suscipit nisi'},
      {'id': '3', 'title': 'Lorem ipsum', 'date': '18/02/2019', 'preview': 'Vestibulum placerat posuere urna vel scelerisque.'},
      {'id': '4', 'title': 'Vestibulum placerat posuere urna vel scelerisque.', 'date': '21/02/2019', 'preview': ''},
      {'id': '5', 'title': 'Vestibulum placerat', 'date': '08/03/2019', 'preview': 'Vestibulum placerat posuere'},
    ];
  }
}
