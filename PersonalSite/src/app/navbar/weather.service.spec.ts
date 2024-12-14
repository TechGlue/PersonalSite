import { TestBed } from '@angular/core/testing';
import { WeatherService } from './weather.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { Weather } from './weather';
import { HttpErrorResponse } from '@angular/common/http';

describe('WeatherService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let weatherService: WeatherService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    // note angular has a lot of defaults in it's tests ensure that you aren't injecting or redeclaring the weather service once you provided the http client spy
    weatherService = new WeatherService(httpClientSpy);

    TestBed.configureTestingModule({
      providers: [
        WeatherService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
  });

  it('should be created', () => {
    expect(weatherService).toBeTruthy();
  });

  it('should return expected weather (HttpClient called once)', (done: DoneFn) => {
    const expectedWeather: Weather = { name: 'Portland', main: { temp: 30 } };

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
  });

  it('should return an error when the server returns a 404', (done: DoneFn) => {
    const errorResponse = new HttpErrorResponse({
      error: {
        message: 'Unable to connect to openweathermap, check connection string',
      },
      status: 404,
      statusText: 'Not Found',
    });

    httpClientSpy.get.and.returnValue(throwError(() => errorResponse));

    weatherService.getWeather().subscribe({
      next: () => done.fail('expected an error, not weather'),
      error: (error) => {
        expect(error.message).toContain('404 Not Found');
        done();
      },
    });
  });
});
