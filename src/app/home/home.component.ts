import { Component, OnInit} from '@angular/core';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  name = 'pagepersonal';
  career = 'Lorem ipsum.';
  education = 'Lorem ipsum dolor sit amet.';
  // tslint:disable-next-line:max-line-length
  aboutMe = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at commodo mi. Duis interdum velit sed metus consequat, et eleifend velit efficitur. Integer et aliquet metus, quis consequat est. Donec consequat, dui elementum vulputate commodo, massa lectus mattis ante, sit amet cursus risus tortor vitae urna.';

  constructor() { }

  ngOnInit() {
  }

}
