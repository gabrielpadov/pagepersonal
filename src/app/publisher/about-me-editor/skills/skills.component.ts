import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers: [MessageService]
})
export class SkillsComponent implements OnInit {

  listSkills: any [];
  msgs: Message[] = [];

  constructor(private messageService: MessageService) {
    this.listSkills = [
      {
        title: 'Abcdf',
        skills: ['a', 'b', 'csssssssss dds']
      },
      {
        title: 'Bhahahahnd ddddd',
        skills: ['c', 'e', 'c', 'aaaaaaaaaaaa']
      }
    ];
   }

  ngOnInit() {
  }

  updateSkills(skill) {

    this.listSkills.push({title: skill.value.title, skills: skill.value.skills});

    if (this.listSkills) {
      this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Successful addition'});
    } else {
      this.messageService.add({severity: 'error', summary: 'Service Message', detail: 'Have empty fields'});
    }

  }

  clear() {
    this.messageService.clear();
  }

  deleteSkill() {
    this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Record deleted!'});
  }

}
