import { Component } from '@angular/core';
import { WorkitemComponent } from './workitem/workitem.component';

@Component({
  standalone: true,
  selector: 'app-work',
  imports: [WorkitemComponent],
  templateUrl: './work.component.html',
})
export class WorkComponent {}
