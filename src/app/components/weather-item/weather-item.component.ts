import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss']
})
export class WeatherItemComponent implements OnInit {

  @Input() weather?: Weather;
  
  constructor() {}

  ngOnInit(): void {
  }

}
