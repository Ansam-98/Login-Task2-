import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare const L:any;



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  
  latitude = 31.968460800000003;
  longitude = 35.88096;
  zoom = 8;

  latitude1 = 29.533991;
  longitude1 = 35.005020;
  zoom1 = 8;

latitude2= 31.176291;
longitude2=35.704231;
zoom2=8;

latitude3=32.03538521209843;
longitude3=35.72616474873925;
zoom3=8;

latitude4=32.06157092269162;
longitude4= 36.08854268923759;
zoom4=8;




latitude5=31.911432436638673;
longitude5= 35.615948416606116;
zoom5=8


latitude6=31.990073327759294;
longitude6=35.88063460816827;
zoom6=8


latitude7=32.58068601909872;
longitude7= 35.81582782567339;
zoom7=8






  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    }





}