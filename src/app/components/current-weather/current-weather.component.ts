import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  public currentWeather?: Weather;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeatherFromLocation().then(obsWeather => obsWeather.subscribe(weather => {
      let data = weather.data["0"];
      console.log("Data:", data);
      console.log("Weather from service: ", weather);
      this.currentWeather = new Weather(data.temp, data.city_name, data.weather.icon, data.weather.description, data.wind_spd, data.ob_time);
        
    }));
  }

}
