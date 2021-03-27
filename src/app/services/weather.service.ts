import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationService } from './location.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private locationService: LocationService, private httpClient: HttpClient) { }
  private weather_key :string = "4e91b047ccdf46cbbf07ebdcacbd6700";

  getWeatherFromLocation() : Promise<Observable<any>>{
    return this.call_weather();
  }

  private async call_location() {
    return this.locationService.getLocation().then(obsLoc => obsLoc.toPromise().then(promLoc => {
      return promLoc;
    }));
  }

  // {count:number, data:[{}]}
  // data: [0:{}, length:number] Zero here represents index
  // 0: {app_temp, aqi, city_name, country_code, datetime, dewpt, dhi, dni, elev_angle, ghi, h_angle, lat, lon, ob_time, pod, pres, rh, slp, snow, solar_rad, ..} ->
  // -> {.., state_code, station, sunrise, sunset, temp, timezone, ts, uv, vis, weather:{}, wind_cdir, wind_cdir_full, wind_dir, wind_spd}
  // weather:{icon:"c02d", code: 802, description: "Scattered Clouds"}
  private async call_weather() {
    let location = await this.call_location().then(loc => {return loc});
    return this.httpClient.get("https://api.weatherbit.io/v2.0/current?city=" + location.city +"&key=" + this.weather_key);
    // return new Observable();
  }
}
