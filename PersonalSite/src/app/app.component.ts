import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SplashpageComponent } from './splashpage/splashpage.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, SplashpageComponent, AboutComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Luís Garcia';
}
