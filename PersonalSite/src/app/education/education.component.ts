import { Component } from '@angular/core';
import { ExperienceComponent } from './experience/experience.component';

@Component({
    selector: 'app-education',
    imports: [ExperienceComponent],
    templateUrl: './education.component.html',
    styleUrl: './education.component.css'
})
export class EducationComponent {}
