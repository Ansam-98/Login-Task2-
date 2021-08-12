import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private _loginUrl = "http://localhost:3000/users";

  constructor(private http:HttpClient) { }

  get_users(user:any){
    return this.http.get<any>(this._loginUrl,user)
  }

 
}
