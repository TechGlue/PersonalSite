import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scrolltop',
  templateUrl: './scrolltop.component.html',
})
export class ScrolltopComponent {
  scrollPosition = false;

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.scrollPosition = window.scrollY > 100;
  }
}
