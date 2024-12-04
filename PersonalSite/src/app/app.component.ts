import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SplashpageComponent } from './splashpage/splashpage.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { ScrolltopComponent } from './scrolltop/scrolltop.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    SplashpageComponent,
    AboutComponent,
    EducationComponent,
    WorkComponent,
    ContactComponent,
    ScrolltopComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Luís Garcia';
}
