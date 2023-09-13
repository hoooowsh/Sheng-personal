import { Component } from '@angular/core';
import { Experience } from '../../Models/Experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Company A',
      position: 'Developer',
      startDate: 'January 2020',
      endDate: 'Present',
      description: 'Developing awesome stuff.',
    },
    {
      company: 'Company B',
      position: 'Junior Developer',
      startDate: 'January 2019',
      endDate: 'December 2019',
      description: 'Learned a lot.',
    },
    // Add more experiences
  ];
}
