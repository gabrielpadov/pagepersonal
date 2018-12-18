import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  constructor() { }

  getSocialMedia() {
    return ['twitter', 'youtube', 'steam',
            'reddit', 'dropbox', 'linkedin',
            'instagram', 'github', 'facebook',
            'spotify', 'slack', 'bitbucket'];
  }
}

