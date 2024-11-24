import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './weather';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  private apiUrl: string = environment.apiurl;

  getWeather(): Observable<Weather> {
    return this.http.get<Weather>(this.apiUrl);
  }
}
