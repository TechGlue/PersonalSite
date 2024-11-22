import { Component } from '@angular/core';
import { NavBarRoutes } from './NavBarRoutes';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navBarRoutes: NavBarRoutes[] = [
    { routeName: 'About', routePath: '/about' },
    { routeName: 'Experience', routePath: '/education' },
    { routeName: 'Work', routePath: '/work' },
    { routeName: 'Contact', routePath: '/contact' },
  ];
}
