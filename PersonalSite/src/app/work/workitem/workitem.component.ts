import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-workitem',
  standalone: true,
  imports: [],
  templateUrl: './workitem.component.html',
  styleUrl: './workitem.component.css',
})
export class WorkitemComponent {
  @Input() title = '';
  @Input() link = '';
  @Input() description = '';
  @Input() listOfTech: string[] = [];
}
