import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Weather } from './weather';
import { environment } from '../../environments/environment';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  private apiUrl: string = environment.apiurl;

  getWeather(): Observable<Weather> {
    // had to manually handle the error when no url is given. was throwing a 200 status code error by default
    const errorResponse = new HttpErrorResponse({
      status: 404,
      statusText: 'Not Found',
      error: {
        message: 'Unable to connect to openweathermap, check connection string',
      },
    });

    // handle error
    return this.http.get<Weather>(this.apiUrl).pipe(
      catchError((error) => {
        if (this.apiUrl == '') {
          return throwError(() => errorResponse);
        }
        return throwError(() => error);
      }),
    );
  }
}
