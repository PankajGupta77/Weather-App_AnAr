import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.page.html',
  styleUrls: ['./current-weather.page.scss'],
})
export class CurrentWeatherPage {
  city: string = '';
  weatherData: any;
  error: any;

  constructor(private weatherService: WeatherService) { }

  search() {
    this.weatherService.getCurrentWeather(this.city)
      .subscribe(
        data => this.weatherData = data,
        error => this.error = error.message
      );
  }
}
