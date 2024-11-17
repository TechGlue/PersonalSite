import { Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SplashpageComponent } from './splashpage/splashpage.component';

export const routes: Routes = [
  {
    path: '',
    component: SplashpageComponent,
  },
  {
    path: 'education',
    component: EducationComponent,
  },
  {
    path: 'work',
    component: WorkComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];
