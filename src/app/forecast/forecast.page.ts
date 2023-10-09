// forecast.page.ts

import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.page.html',
  styleUrls: ['./forecast.page.scss'],
})
export class ForecastPage {
  city: string = ''; // Define the city property
  forecastData: any;
  error: any;

  constructor(private weatherService: WeatherService) { }

  ionViewWillEnter() {
    this.weatherService.getWeatherForecast(this.city)
      .subscribe(
        data => this.forecastData = data,
        error => this.error = error.message
      );
  }
}
