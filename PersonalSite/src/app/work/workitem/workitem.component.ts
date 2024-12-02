import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-workitem',
  imports: [],
  templateUrl: './workitem.component.html',
})
export class WorkitemComponent {
  @Input() title = '';
  @Input() link = '';
  @Input() description = '';
  @Input() listOfTech: string[] = [];
}
