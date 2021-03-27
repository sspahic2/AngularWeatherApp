import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ip } from 'src/app/models/ip.model';
import { Weather } from 'src/app/models/weather.model';
import { LocationService } from 'src/app/services/location.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {

  public weathers: Weather[] = [new Weather(15, "Sarajevo", "t04d", "", 1),
                                new Weather(16, "Zenica", "t01d", "", 1),
                                new Weather(17, "Mostar", "t03n", "", 1)]

  constructor(private weather: WeatherService) { }

  ngOnInit(): void {
    // this.weather.getWeatherFromLocation().then(res => res.subscribe(json => console.log(json)));
  }
  
}
