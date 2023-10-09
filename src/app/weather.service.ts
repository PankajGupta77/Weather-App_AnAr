import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '67c078129cc3d36fcb80fd3d3760aec2'; // Replace with your API key
  private apiUrl = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: any): Observable<any> {
    const url = `${this.apiUrl}/weather?q=${city}&units=metric&appid=${this.apiKey}`;
    return this.http.get<any>(url)
      .pipe(catchError(this.handleError));
  }

  getWeatherForecast(city:any): Observable<any> {
    const url = `${this.apiUrl}/forecast?q=${`mumbai`}&units=metric&appid=${this.apiKey}`;
    return this.http.get<any>(url)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`);
    }
    return throwError('Something went wrong; please try again later.');
  }
}
