import { Component,OnInit } from '@angular/core';
import { DevicService } from '../devic.service';
import { Devices } from '../device';
@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  devices:Devices[]=[]
  solutiontype:any;
 
  constructor(private _deviceService:DevicService) { }

  ngOnInit(): void {

    this._deviceService.getDevices().subscribe(
      res => this.devices = res,
      err => console.log(err)
    )
  }
 
  Search(){
    if(this.solutiontype == ""){
      this.ngOnInit();
    }else{
      this.devices = this.devices.filter(res =>{
        return res.solutiontype?.toLocaleUpperCase().match(this.solutiontype?.toLocaleUpperCase());
      });
    }
    }


   

    
}






