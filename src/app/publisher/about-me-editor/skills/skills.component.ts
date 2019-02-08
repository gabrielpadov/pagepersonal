import { Skill } from './../../../datasource/skill';
import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  titleSkill: string;
  skills: string [];
  skill: any = {
    title: '',
    skills: []
  };


  listSkills: any [];

  constructor() {
    this.listSkills = [];
   }

  ngOnInit() {
  }

  updateSkills() {

    this.skill.title = this.titleSkill;
    this.skill.skills = this.skills;

    this.listSkills.push(this.skill);

  }

}
