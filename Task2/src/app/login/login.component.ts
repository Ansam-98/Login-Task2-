import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

 
  email!: string;
  password!: string;
 


  constructor(private _auth:ClientService,  private _router:Router){}
  

  get_users(){


    if(this.email=="ansam.hiary@gmail.com"&& this.password=="123456")
    {
      

      this._auth.get_users(this.email).subscribe(
        res => {
         
       
          this._router.navigate(['/devices'])
        },
         err => console.log(err)
       )
    }
    else{
      alert('Please Login')
    }
  
  }

    
}


