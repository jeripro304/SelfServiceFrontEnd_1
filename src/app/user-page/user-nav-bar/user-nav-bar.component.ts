import { Component } from '@angular/core';
import { UserPostpaidService } from '../UserService/user-postpaid.service';
import { timer } from 'rxjs';
import { Router } from '@angular/router';
import { DataUsage } from 'src/app/Modal/DataUsage';

@Component({
  selector: 'app-user-nav-bar',
  templateUrl: './user-nav-bar.component.html',
  styleUrls: ['./user-nav-bar.component.css']
})
export class UserNavBarComponent {
  
  avaiablegb: any;
  receivedData:any;
  username:any;
  notification:any
  constructor(private psservice:UserPostpaidService,private route:Router){
    const umMobileNo=sessionStorage.getItem("usermobileno");
    const storedData = sessionStorage.getItem("userData");
     
    if(storedData){
      console.log("sotred data");
      console.log(storedData);
      this.receivedData = JSON.parse(storedData);
      this.username=this.receivedData.name
    }

    this.psservice.getNotification(umMobileNo).subscribe((msg)=>{
      console.log("+++++++++++++++++++++++++++++++++++++++++++");
      timer(2000).subscribe(()=>{
        console.log(msg);
        this.notification=msg;
      })
    })
    console.log('from the userprepaid comp');
    console.log(umMobileNo);

  }
  deleteNotification(nid:any){
    this.psservice.deleteNotify(nid).subscribe()
  }
  // getUserDetails(mobilenumber: any){
  //   console.log(mobilenumber);
    
  //   console.log('from the postpaid service');
  //   this.psservice.getUserDetails(mobilenumber).subscribe((data) => {
  //     this.userdata=data;
  //     // timer(4000).subscribe(()=>{
  //     //   this.userdata=data;      
  //     // })
  //   });
  // }

  availableGB:any;
  dataupdate:DataUsage=new DataUsage(0,'',new Date(),0,0);
  signOut(){
    console.log('into the signout');
    this.avaiablegb=sessionStorage.getItem("availableGB");
    this.dataupdate.mobileno=this.receivedData.mobileno;
    this.dataupdate.dataUsed=this.avaiablegb;
    this.dataupdate.curTime=this.setCurrentTime();
    
    this.psservice.updateData(this.dataupdate)

    console.log(this.avaiablegb,this.receivedData.mobileno,this.receivedData.todayDate);
    
    timer(1000).subscribe(()=>{
      sessionStorage.removeItem("availableGB")
      sessionStorage.removeItem("userData")
      sessionStorage.removeItem("usermobileno")
      this.route.navigate(['']);
    })
   
  }
  setCurrentTime():string{
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return formattedHours + ':' + formattedMinutes + ' ' + ampm;
  }
}
