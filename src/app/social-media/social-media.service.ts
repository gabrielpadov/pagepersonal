import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  constructor() { }

  getSocialMedia(){
    return ['Java','Ruby','CSS'];
  }
}
