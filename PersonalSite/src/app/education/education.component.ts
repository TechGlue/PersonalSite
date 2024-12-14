import { Component } from '@angular/core';
import { ExperienceComponent } from './experience/experience.component';

@Component({
  standalone: true,
  selector: 'app-education',
  imports: [ExperienceComponent],
  templateUrl: './education.component.html',
})
export class EducationComponent {}
