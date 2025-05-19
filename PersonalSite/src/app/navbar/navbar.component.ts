import { Component } from '@angular/core';
import { NavBarRoutes } from './NavBarRoutes';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [RouterModule],
})
export class NavbarComponent implements OnInit {
  city = '';
  temp = 0;

  constructor(
    private weatherService: WeatherService,
    private activatedRoute: ActivatedRoute,
  ) {}

  navBarRoutes: NavBarRoutes[] = [
    { routeName: 'About', routePath: '/about', fragment: 'About' },
    { routeName: 'Projects', routePath: '/work', fragment: 'Projects' },
    { routeName: 'Contact', routePath: '/contact', fragment: 'Contact' },
  ];

  ngOnInit(): void {
    // fragment when site is loaded will be null, only trigger jump to section when fragment is not null
    this.activatedRoute.fragment.subscribe((fragment: string | null) => {
      if (fragment) this.jumpToSection(fragment);
    });

    this.weatherService.getWeather().subscribe({
      next: (weatherData) => {
        this.city = weatherData.name;
        this.temp = this.convertToFahrenheit(weatherData.main.temp);
      },
    });
  }

  jumpToSection(section: string | null) {
    if (section) {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleNav() {
    const navItem = document.getElementById('nav-elements');
    navItem?.classList.toggle('hidden');
  }

  // run up the float
  convertToFahrenheit(celsius: number): number {
    return Math.ceil((celsius * 9) / 5 + 32);
  }
}

// We are only making a REST call here so it's okay to leave it here
interface OnInit {
  ngOnInit(): void;
}
