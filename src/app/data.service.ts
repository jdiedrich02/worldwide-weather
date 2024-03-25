import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getCityData(): Observable<any> {
    return this.http.get<any>('assets/cities.json');
  }

  getSpecificCity(city: string): Observable<any> {
    return this.http.get<any>('assets/cities.json').pipe(
      map((cities: any[]) => cities.filter(c => c.name.toLowerCase().includes(city.toLowerCase())))
    );
  }

  getWeather(city: string): Observable<any> {
    return this.http.get(`http://api.weatherapi.com/v1/forecast.json?q=${city}&key=${environment.apiKeyWeatherAPI}&days=3`);
  }
}