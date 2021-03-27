import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ip } from '../models/ip.model';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient : HttpClient) { }

  private static ip?: Ip;

  getLocation(): Promise<Observable<any>> {
    return this.call();
  }

  // {city:"", continent_code:"", continent_name:"", country_code:"", country_name:"", ip:"", latitude:number, location:{}, longitued:number, ...}
  // location: {calling_code:"", capital:"", is_eu:bool, ...}
  async call() {
    let prom;
    if(LocationService.ip == undefined) {
      prom = await (this.httpClient.get<Ip>("http://api.ipify.org/?format=json").toPromise().then(res => {
      LocationService.ip = res; 
      return this.call_location(res)
       // return new Observable();
    }));
    } else {
      prom = this.call_location(LocationService.ip);
    }

    return prom;
  }

  call_location(identifier: Ip) {
    return this.httpClient.get<any>("http://api.ipstack.com/"+ identifier.ip + "?access_key=5d1f9a3b0a56883fd4adf35156274e66&format=1"); 
  }
}
