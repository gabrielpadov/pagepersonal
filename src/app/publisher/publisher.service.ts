import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  listMedias: any = [
    {id: 1, media: 'instagram', link: 'www.instagram.com'},
    {id: 2, media: 'facebook', link: 'www.facebook.com'}
  ];

  constructor() { }


  getListMedias() {
    return this.listMedias;
  }
}
