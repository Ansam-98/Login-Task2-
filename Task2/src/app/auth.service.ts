import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

private _loginUrl = "localhost:3000/users";



constructor(private http:HttpClient) { }

  
  loginUser(client:any){
    return this.http.post<any>(this._loginUrl,client)
  }



}
