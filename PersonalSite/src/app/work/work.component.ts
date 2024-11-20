import { Component } from '@angular/core';
import { WorkitemComponent } from './workitem/workitem.component';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [WorkitemComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
})
export class WorkComponent {}
