import { Component } from '@angular/core';
import { NavBarRoutes } from './NavBarRoutes';
import { WeatherService } from './weather.service';

// todo:
// research and look for testing with a routing module

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  city = '';
  temp = 0;

  constructor(private weatherService: WeatherService) {}

  navBarRoutes: NavBarRoutes[] = [
    { routeName: 'About', routePath: '/about' },
    { routeName: 'Experience', routePath: '/education' },
    { routeName: 'Work', routePath: '/work' },
    { routeName: 'Contact', routePath: '/contact' },
  ];

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe({
      next: (weatherData) => {
        this.city = weatherData.name;
        this.temp = this.convertToFahrenheit(weatherData.main.temp);
      },
    });
  }

  convertToFahrenheit(celsius: number): number {
    return (celsius * 9) / 5 + 32;
  }
}

// We are only making a REST call here so it's okay to leave it here
interface OnInit {
  ngOnInit(): void;
}
