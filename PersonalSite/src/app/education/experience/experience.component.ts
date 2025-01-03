import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  @Input() company!: string;
  @Input() position!: string;
  @Input() summary!: string;
  @Input() misc!: string;
}
