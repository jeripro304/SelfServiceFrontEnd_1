import { Component } from '@angular/core';
import { UserPostpaidService } from '../UserService/user-postpaid.service';

@Component({
  selector: 'app-user-calling',
  templateUrl: './user-calling.component.html',
  styleUrls: ['./user-calling.component.css']
})
export class UserCallingComponent {

  mobileno:any;
  time:any
  date:any;
  constructor(private usService:UserPostpaidService){
    this.time=this.setCurrentTime();
    this.date=new Date();
    this.mobileno=sessionStorage.getItem("usermobileno")
  }
  
  setCurrentTime():string{
    const now = new Date();
    const hours = now.getHours();
    const min = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    // Convert hours to 12-hour format
    const formattedHours = hours % 12 || 12;
    // Add leading zero for minutes if necessary
    const formattedMinutes = min < 10 ? '0' + min : min;
    return formattedHours + ':' + formattedMinutes + ' ' + ampm;
  }

  callMin:any;
  callSec:any;
  callDuration:any;
  toMobileno:any;
  callSubmit(){
    this.callDuration=this.callMin+":"+this.callSec
    console.log("from mob no:",this.mobileno);
    console.log("to mob no",this.toMobileno);
    console.log("date and time"+this.date +"   "+this.time);
    console.log("call time",this.callDuration);
    
    this.usService.callSend(this.mobileno,this.toMobileno,this.date,this.time,this.callDuration)
    
    
    
  }

}
