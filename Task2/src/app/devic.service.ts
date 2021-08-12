import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Devices } from './device';


@Injectable({
  providedIn: 'root'
})
export class DevicService {

    headers = new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
  httpOptions ={
    headers : this.headers
  }
  private _devicesUrl = "http://localhost:3000/devices";
  constructor(private http: HttpClient) { }

    getDevices(){
    return this.http.get<Devices[]>(this._devicesUrl)
  }
}



