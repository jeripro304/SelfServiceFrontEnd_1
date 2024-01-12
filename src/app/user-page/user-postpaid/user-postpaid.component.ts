import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/login-page/login-service/login-service.service';
import { UserPostpaidService } from '../UserService/user-postpaid.service';
import { timer } from 'rxjs';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-user-postpaid',
  templateUrl: './user-postpaid.component.html',
  styleUrls: ['./user-postpaid.component.css']
})
export class UserPostPaidComponent implements OnInit{
  userdata:any;
  avaiablegb:any;
  receivedData:any;
  fname:any;
  userMobileno:any;
  constructor(private psservice:UserPostpaidService,private route:Router){
    const umMobileNo=sessionStorage.getItem("usermobileno");
    console.log('from the userprepaid comp');
    console.log(umMobileNo);
    this.getUserDetails(umMobileNo);
    const storedData = sessionStorage.getItem("userData");
     
    if(storedData){
      console.log("sotred data");
      console.log(storedData);
      this.receivedData = JSON.parse(storedData);
      this.fname=this.receivedData.name
      this.userMobileno=this.receivedData.mobileno
      this.avaiablegb=this.receivedData.availableGB
      // sessionStorage.setItem("availableGB",this.avaiablegb);
    }
    
    

  }
  
  getUserDetails(mobilenumber: any){
    console.log(mobilenumber);
    
    console.log('from the postpaid service');
    this.psservice.getUserDetails(mobilenumber).subscribe((data) => {
      timer(2000).subscribe(()=>{
        this.userdata=data;
        this.avaiablegb=this.userdata.availableGB
        this.dataReduce();
        
        this.percentCalculate(this.userdata.availableGB,this.userdata.toatalGB,mobilenumber);
        console.log(this.userdata)
      
      })
    });
  }
  
  ngOnInit() {
    this.dataReduce();
  }

  datausage:any;
  dataReduce(){
    
    if (this.avaiablegb>0){
      this.avaiablegb=parseFloat((this.avaiablegb-0.3).toFixed(2)) 
      sessionStorage.setItem("availableGB",this.avaiablegb);
    // console.log(this.avaiablegb);
      this.avaiablegb=this.avaiablegb
    }
    if (this.avaiablegb<0){

    }
    else{
      sessionStorage.setItem("availableGB",this.avaiablegb);
      this.psservice.reduceDataUsage(this.userdata,this.avaiablegb).subscribe();
    }
    
    
    // timer(3000).subscribe(()=>{
    //   //  console.log(this.avaiablegb);
    //   //  this.dataReduce()
    // })
    
  }

  percent:any;
  percentCalculate(currentGb:any,totalGb:any,umMobileNo:any){
    this.percent = parseFloat(((currentGb/totalGb)*100).toFixed(2)) 
    console.log(this.percent);
    console.log("this is updating the double data");
    
    if (currentGb===0 || currentGb<0){
      console.log('data exhausted');
    }
    else{
      this.psservice.getUserDetails(umMobileNo).subscribe((data) => {
        timer(2000).subscribe(()=>{
          this.userdata=data;
          this.avaiablegb=this.userdata.availableGB
          // this.percentCalculate(this.userdata.availableGB,this.userdata.toatalGB);
          console.log(this.userdata)
          // sessionStorage.setItem("userData",this.userdata)
          this.dataReduce();
        
        })
      });
    }
    

  }

  

}
