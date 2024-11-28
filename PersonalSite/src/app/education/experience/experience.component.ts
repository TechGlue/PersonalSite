import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-experience',
    imports: [],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  @Input() company = '';
  @Input() position = '';
  @Input() summary = '';
  @Input() misc = '';
}
