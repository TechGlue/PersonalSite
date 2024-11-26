import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { NavbarComponent } from './navbar.component';
import { of } from 'rxjs';
import { WeatherService } from './weather.service';
import { Weather } from './weather';
import { HttpClient } from '@angular/common/http';

describe('NavbarComponent', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let weatherService: WeatherService;
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    // note angular has a lot of defaults in it's tests ensure that you aren't injecting or redeclaring the weather service once you provided the http client spy
    weatherService = new WeatherService(httpClientSpy);
    await TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
      imports: [NavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Todo: continue debugging on how to inject a mock service into a component
  it('should create and display the weather from the service', (done: DoneFn) => {
    const expectedWeather: Weather = { name: 'Portland', main: { temp: 30 } };
    const fixture = TestBed.createComponent(NavbarComponent);

    // this is telling the httpclient spy to return this specific value that we are passing in. Should return observable of expectedWeather
    httpClientSpy.get.and.returnValue(of(expectedWeather));

    // subscribe and check if the weather is equal to the expected weather
    weatherService.getWeather().subscribe({
      next: (weather) => {
        expect(weather)
          .withContext('expected weather')
          .toEqual(expectedWeather);
        done();
      },
      error: done.fail,
    });

    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);

    // check if the weather is displayed on the component after the service call
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    console.log(compiled);
    expect(compiled.querySelector('p')?.textContent).toContain('Portland');
    expect(compiled.querySelector('p')?.textContent).toContain(30);
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
