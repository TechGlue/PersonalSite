import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'splashpage',
  standalone: true,
  imports: [],
  templateUrl: './splashpage.component.html',
  styleUrl: './splashpage.component.css',
})
export class SplashpageComponent {
  constructor(private router: Router) {}

  // redirect to the contact page
  navigateToContact() {
    this.router.navigate(['/contact']);
  }
}
