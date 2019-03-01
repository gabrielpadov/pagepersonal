import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {

  career = 'Lorem ipsum.';
  // tslint:disable-next-line:max-line-length
  aboutMe = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at commodo mi. Duis interdum velit sed metus consequat, et eleifend velit efficitur. Integer et aliquet metus, quis consequat est. Donec consequat, dui elementum vulputate commodo, massa lectus mattis ante, sit amet cursus risus tortor vitae urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at commodo mi. Duis interdum velit sed metus consequat, et eleifend velit efficitur. Integer et aliquet metus, quis consequat est. Donec consequat, dui elementum vulputate commodo, massa lectus mattis ante, sit amet cursus risus tortor vitae urna.';
  email = 'personal@page.com';
  listSkills = [
    {
      title: 'Abcdf',
      skills: ['addddddddddd', 'bdddddd', 'csssssssss dds']
    },
    {
      title: 'Bhahahahnd ddddd',
      skills: ['cdddddd', 'eddddddd', 'cdddddd dddd', 'aaaaaa']
    },
    {
      title: 'Framework',
      skills: ['Bootstrap', 'PrimeNG', 'Materialize CSS']
    },
    {
      title: 'Hardware',
      skills: ['Verilog', 'CPUs', 'Robotic']
    }
  ];

  listInterests = [ 'dev ops', 'Design', 'front', 'soccer',
      'back', 'music', 'IoT', 'learning Machine'
    ];

    listEducation: any = [
      {'id': '0', 'institution': 'Centro Federal de Educação Tecnológica de Minas Gerais',
      'dateStart': '06/02/2017', 'dateEnd': '',
      'course': 'Engenharia de Computação', 'description': 'suscipit nisi photograph',
      // tslint:disable-next-line:max-line-length
      'note': '04/2014 - 03/2017: Bolsista de extensão - projeto Cefast Baja SAE. Vestibulum placerat posuere urna vel scelerisque. Lorem ipsum dolor sit amet' },
      {'id': '1', 'institution': 'Lorem ipsum dolor Lorem ipsum dolor',
      'dateStart': '06/02/2015', 'dateEnd': '06/02/2016',
      'course': 'Duis maximus suscipit nisi', 'description': 'Lorem ipsum dolor suscipit nisi photograph',
      'note': 'Vestibulum placerat posuere urna vel scelerisque. Lorem ipsum dolor sit amet' },
      {'id': '1', 'institution': 'Lorem ipsum dolor Lorem ipsum dolor',
      'dateStart': '06/02/2013', 'dateEnd': '06/02/2014',
      'course': 'Duis maximus suscipit nisi', 'description': 'Lorem ipsum dolor suscipit nisi photograph',
      'note': 'Vestibulum placerat posuere urna vel scelerisque. Lorem ipsum dolor sit amet' }
    ];

    listComplement: any = [
      {'id': '0', 'institution': 'Lorem ipsum dolor Lorem ipsum',
      'conclusion': '06/02/2019', 'course': 'Duis maximus suscipit nisi',
      'note': 'Vestibulum placerat posuere urna vel scelerisque. Lorem ipsum dolor sit' },
      {'id': '1', 'institution': 'Lorem ipsum dolor',
      'conclusion': '06/02/2019', 'course': 'Duis maximus',
      'note': '' }
    ];


  listOccupation: any = [
    {'id': '0', 'company': 'Lorem ipsum dolor',
    'dateStart': '06/02/2017', 'dateEnd': '',
    'office': 'Duis maximus suscipit nisi', 'description': 'suscipit nisi photograph',
    'sector': 'Vestibulum placerat posuere urna vel scelerisque. Lorem ipsum dolor sit' },
    {'id': '1', 'company': 'Lorem ipsum dolor Lorem ipsum dolor',
    'dateStart': '06/02/2015', 'dateEnd': '06/02/2016',
    'office': 'Duis maximus suscipit nisi', 'description': 'Lorem ipsum dolor suscipit nisi photograph',
    'sector': 'Vestibulum placerat posuere urna vel scelerisque. Lorem ipsum dolor sit amet' },
    {'id': '1', 'company': 'Lorem ipsum dolor Lorem ipsum dolor',
    'dateStart': '06/02/2013', 'dateEnd': '06/02/2014',
    'office': 'Duis maximus suscipit nisi', 'description': 'Lorem ipsum dolor suscipit nisi photograph',
    'sector': 'Vestibulum placerat posuere urna vel scelerisque. Lorem ipsum dolor sit amet' }
  ];

  constructor() { }

  ngOnInit() { }

}

