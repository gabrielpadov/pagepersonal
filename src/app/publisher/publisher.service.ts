import { Injectable } from '@angular/core';
import { Post } from '../datasource/post';
import { SocialMedia } from '../datasource/social-media';
// import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  listMedia: any = [
    {id: 1, media: 'instagram', link: 'https://www.instagram.com'},
    {id: 2, media: 'facebook', link: 'https://www.facebook.com'}
  ];

  listPost: any = [
    // tslint:disable-next-line:max-line-length
    {'id': '1', 'title': 'Lorem ipsum dolor sit amet', 'date': '01/01/2019', 'preview': ' scelerisque.', 'label': [ 'music'], 'content': '<p>Lorem ipsum dolor sit amet<br>Vestibulum placeratVestibulum placerat posuere urna vel scelerisque.Lorem ipsum dolor sit amstibulum placerat Vestibulum placerat posuere urna vel scelerisque.</p>' },
    {'id': '2', 'title': 'Lorem ipsum dolor', 'date': '06/02/2019', 'preview': 'Duis maximus suscipit nisi', 'label': [ 'photograph'] },
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
    {'id': '8', 'title': 'Vestibulum placerat posuere urna vel scelerisque. Lorem ipsum dolor sit amet', 'date': '21/02/2019', 'preview': '', 'label': [ 'verse' ] },
    {'id': '9', 'title': 'Vestibulum placerat', 'date': '08/03/2019', 'preview': 'Vestibulum placerat posuere', 'label': [ 'dev'] },
    {'id': '10', 'title': 'Lorem ipsum dolor', 'date': '06/02/2019', 'preview': 'Duis maximus suscipit nisi', 'label': [ ] },
    // tslint:disable-next-line:max-line-length
    {'id': '11', 'title': 'Lorem ipsum', 'date': '18/02/2019', 'preview': 'Vestibulum placerat posuere urna vel scelerisque.', 'label': [ 'music'] },
    {'id': '12', 'title': 'Vestibulum placerat posuere urna vel scelerisque.', 'date': '21/02/2019', 'preview': '', 'label': [ ] },
    {'id': '13', 'title': 'Vestibulum placerat', 'date': '08/03/2019', 'preview': 'Vestibulum placerat posuere', 'label': [ 'music'] }
  ];

  listLabel: any = [
    { id: '1', label: 'literature' },
    { id: '2', label: 'photograph' },
    { id: '3', label: 'verse' },
    { id: '4', label: 'dev' },
    { id: '5', label: 'music' }
  ];

  listLabels: string[] = ['literature', 'photograph', 'verse', 'dev', 'music' ];

  listLink: any = [
    { id: '1', link: 'https://angular.io/', name: 'Angular' },
    { id: '2', link: 'https://www.typescriptlang.org/', name: 'Typescript' },
    { id: '3', link: 'https://www.primefaces.org/primeng/#/', name: 'PrimeNG' }
  ];

  // constructor(private http: Http) { }
  constructor () {}

  getListMedia() {
    return this.listMedia;
  }

  getAddMedia(media: any) {

    this.listMedia.push({ link: media.value.link, media: media.value.media });

    return true;
  }

  getAddLink(link: any) {

    this.listLink.push({ link: link.value.link, name: link.value.name, id: '99' });

    return true;
  }

  getListLabel() {
    return this.listLabel;
  }

  getListLabels() {
    return this.listLabels;
    //  return this.http.get('')
     //             .toPromise()
    //              .then(res => <any[]> res.json().data)
     //             // tslint:disable-next-line:arrow-return-shorthand
     //             .then(data => { return data; });
  }

  getListLink() {
    return this.listLink;
  }

  getListPost() {
    return this.listPost;
  }

  setDeleteMedia(id) {
    console.log(id);
    this.listMedia.pop();
    // console.log(this.listMedia);
    return true;
  }

  setDeleteLink(id) {
    console.log(id);
    this.listLink.pop();
    return true;
  }

  setDeletePost(id) {
    console.log(id);
    return true;
  }
}
