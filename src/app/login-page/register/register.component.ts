import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginServiceService } from '../login-service/login-service.service';
import { timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  mobileno:any;
  otpno:any;
  otpen:boolean;
  // checkIfValidUser:any=false;;
  // editablenumber:boolean=true;
  isphnoreadonly=false;
  statusofuser:any;
  // mobno:string=''  //this is data binded value
  stat:any;
  otpvalue:any;//value of otp
  otpmsg:any;
  loader:boolean;

  enablesendotp:any;
  constructor(private loginservice:LoginServiceService,private route:Router){
    this.enablesendotp=true;
    this.loader=false;
    this.otpen=false
    this.mobileno=new FormControl ('',[Validators.pattern('[1-9][0-9]*$'),Validators.required,Validators.minLength(12),Validators.maxLength(12)])
    this.otpno=new FormControl('',[Validators.minLength(6),Validators.pattern('^[0-9]*$')])
  }

  userdisplaymessage:any='';
  otpsentmsg:any=''
  enableotp(){
    this.otpen=true;
    this.isphnoreadonly=true;
    console.log(this.mobileno.value);
    this.otpsentmsg='Otp Sent'
    
    setTimeout(() => {
      this.loader=true;      
    },);
    
    setTimeout(() => {
      this.loader=false;
    }, 2000);
    
    this.loginservice.checkuser(this.mobileno.value).subscribe((msg)=>{this.stat=msg});
    timer(2000).subscribe(()=>{
        
        this.statusofuser=this.stat.status
        console.log("from clicking send otp  "+this.statusofuser);
        if(this.statusofuser==='User Already Registered'){
          this.userdisplaymessage="Your Already Registered Please Sign in"
          this.otpsentmsg=''
          this.loader=false;
          this.enablesendotp=false;
          
        }
        else if(this.statusofuser==='notvalid'){
          this.userdisplaymessage="Please register first to your admin"
          this.otpsentmsg=''
          this.enablesendotp=false;
          this.loader=false;

        }
          // this.otpen=false;
         
        // if(this.statusofuser==='notvalid'){
        //   // this.userdisplaymessage='Your Not Registered Yet'
        // }
      })
  }

  
  toggleEditMode(){
    this.isphnoreadonly=false;
    this.otpen=false;
  }

  //sending the otp to the boot
  otpmsgcheck:any;
  
  loginUser(){
    this.otpvalue=this.otpno.value;
    console.log(this.otpvalue);
    this.loginservice.sendOtp(this.otpvalue).subscribe((msg)=>{this.otpmsg=msg});
    timer(300).subscribe(()=>{
      console.log(this.otpmsg.status);
      this.otpmsgcheck=this.otpmsg.status
      if (this.otpmsgcheck==='User Registered'){
        this.route.navigate(['/login'])
      }
      

    })    

  }
  


  onInputChange(newValue: string){
  if (newValue.length===12){
    }
  }
  

  // for loading page animation
 
  dotValue: string = '.';
  private dotCount: number = 1;

  loaderfun() {
    setInterval(this.updateDotAnimation.bind(this), 500);
  }

  private updateDotAnimation() {
    this.dotValue = '.'.repeat(this.dotCount % 4);
    this.dotCount++;
  }
  

}
