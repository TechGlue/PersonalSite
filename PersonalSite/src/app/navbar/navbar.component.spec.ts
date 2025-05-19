import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { NavbarComponent } from './navbar.component';
import { WeatherService } from './weather.service';
import { Weather } from './weather';
import { of } from 'rxjs';
import { RouterModule } from '@angular/router';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let weatherService: WeatherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        WeatherService,
      ],
      imports: [NavbarComponent, RouterModule.forRoot([])],
    }).compileComponents();

    weatherService = TestBed.inject(WeatherService);

    // 30 degrees celsius = 86 degrees fahrenheit
    const dummyWeather: Weather = { name: 'Portland', main: { temp: 30 } };
    spyOn(weatherService, 'getWeather').and.returnValue(of(dummyWeather));

    fixture = TestBed.createComponent(NavbarComponent);
    fixture.autoDetectChanges();
    component = fixture.componentInstance;
  });

  it('should create navbar component and display portland and 86 degrees fahrenheit', async () => {
    weatherService = fixture.debugElement.injector.get(WeatherService);

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(component).toBeTruthy();
    expect(component.city).toEqual('Portland');
    expect(component.temp).toEqual(86);

    expect(compiled.querySelector('nav')?.textContent).toContain('Portland');
    expect(compiled.querySelector('nav')?.textContent).toContain('86');
  });

  it('should convert to fahrenheit', () => {
    expect(component.convertToFahrenheit(0)).toBe(32);
    expect(component.convertToFahrenheit(3.9999999)).toBe(40);

    expect(component.convertToFahrenheit(10)).toBe(50);
  });

  it('should render paths', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    // Check if each link is rendered
    expect(compiled.querySelector('nav')?.textContent).toContain('About');
    expect(compiled.querySelector('nav')?.textContent).toContain('Projects');
    expect(compiled.querySelector('nav')?.textContent).toContain('Contact');
  });
});
