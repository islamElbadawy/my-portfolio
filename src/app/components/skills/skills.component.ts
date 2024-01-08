import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skillsData = [
    {
      title: 'Frontend developer',
      subtitle: 'More than 3 years',
      icon: 'uil uil-brackets-curly',
      items: [
        { name: 'HTML', percentage: 90, class: 'skills-html' },
        { name: 'CSS', percentage: 80, class: 'skills-css' },
        { name: 'Javascript', percentage: 75, class: 'skills-js' },
        { name: 'Angular', percentage: 70, class: 'skills-angular' },
      ],
    },
    {
      title: 'Embedded Systems Engineer',
      subtitle: 'More than a year',
      icon: 'uil uil-circuit',
      items: [
        { name: 'C/C++', percentage: 50, class: 'skills-c' },
        { name: 'Microcontroller', percentage: 70, class: 'skills-mic' },
      ],
    },
    {
      title: 'UI/UX Designer',
      subtitle: 'More than 3 years',
      icon: 'uil uil-swatchbook',
      items: [
        { name: 'Adobe XD', percentage: 60, class: 'skills-xd' },
        { name: 'Figma', percentage: 40, class: 'skills-figma' },
        { name: 'Photoshop', percentage: 75, class: 'skills-ps' },
      ],
    },
  ];
}
