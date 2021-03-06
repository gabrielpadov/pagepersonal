import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from './social-media.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  medias: string[];

  constructor(private socialMediaService: SocialMediaService) {


    this.medias = this.socialMediaService.getSocialMedia();
  }

  ngOnInit() {
  }

}
