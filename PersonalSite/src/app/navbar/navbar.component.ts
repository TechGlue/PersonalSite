import { Component } from '@angular/core';
import { NavBarRoutes } from './NavBarRoutes';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navBarRoutes: NavBarRoutes[] = [
    { routeName: 'Home', routePath: '/home' },
    { routeName: 'About', routePath: '/about' },
    { routeName: 'Experience', routePath: '/experience' },
    { routeName: 'Contact', routePath: '/contact' },
  ];
}
