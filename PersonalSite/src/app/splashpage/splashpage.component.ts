import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splashpage',
  templateUrl: './splashpage.component.html',
})
export class SplashpageComponent {
  constructor(private router: Router) {}

  // redirect to the contact page
  navigateToContact() {
    this.router.navigate(['/contact']);
  }
}
