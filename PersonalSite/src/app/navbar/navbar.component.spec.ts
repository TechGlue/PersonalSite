import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { NavbarComponent } from './navbar.component';
import { WeatherService } from './weather.service';
import { Weather } from './weather';
import { of } from 'rxjs';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let getWeatherSpy: jasmine.Spy;
  let weatherService: WeatherService;

  // 30 degrees celsius = 86 degrees fahrenheit
  const dummyWeather: Weather = { name: 'Portland', main: { temp: 30 } };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        WeatherService,
      ],
      imports: [NavbarComponent],
    }).compileComponents();

    weatherService = TestBed.inject(WeatherService);
    getWeatherSpy = spyOn(weatherService, 'getWeather').and.returnValue(
      of(dummyWeather),
    );

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
    expect(compiled.querySelector('div')?.textContent).toContain('Portland');
    expect(compiled.querySelector('div')?.textContent).toContain('86');
  });

  it('should convert to fahrenheit', () => {
    expect(component.convertToFahrenheit(0)).toBe(32);
    expect(component.convertToFahrenheit(10)).toBe(50);
  });

  it('should render paths', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    // Check if each link is rendered
    expect(compiled.querySelector('div')?.textContent).toContain('About');
    expect(compiled.querySelector('div')?.textContent).toContain('Contact');
    expect(compiled.querySelector('div')?.textContent).toContain('Experience');
    expect(compiled.querySelector('div')?.textContent).toContain('Work');
  });
});
