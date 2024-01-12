import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginServiceService } from '../login-service/login-service.service';
import { timer } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent {
  mobileno:any;
  otpno:any;
  otpen:boolean;
  // editablenumber:boolean=true;
  isphnoreadonly=false;

  constructor(private loginservice:LoginServiceService,private route:Router){

    this.otpen=false
    this.mobileno=new FormControl ('',[Validators.pattern('^[6-9][0-9]*$'),Validators.required,Validators.minLength(10),Validators.maxLength(10)])
    this.otpno=new FormControl('',[Validators.minLength(6),Validators.pattern('[0-9]*$')])
  }


  loginenable:any;
  loginmsg:any;
  usermsg:any=''
  enableotp(){
    this.otpen=true;
    this.isphnoreadonly=true;
    console.log(this.mobileno.value);
    this.loginservice.sendLoginPhNo(this.mobileno.value).subscribe((msg)=>{this.loginmsg=msg})

    timer(2000).subscribe(()=>{
      console.log(this.loginmsg.status);
      if (this.loginmsg.status==='UserInvalid'){
        this.usermsg='You have not registered yet'
        console.log(this.usermsg);
        
        this.loginenable=false;
        Swal.fire({
          icon: 'error',
          title: 'Yor are not a valid User please Register First',
          text: '',
          // footer: ''
        })
      }
      else{
        this.usermsg='Otp Sent'
        this.loginenable=true
      }
    
    })
  }

  //on valid user in ProSync login
  otpCheckMsg:any;
  otpUserMsg:any;
  userLogin(){
    console.log(this.otpno.value);
    this.loginservice.loginOtpCheck(this.otpno.value).subscribe((msg)=>{this.otpCheckMsg=msg})

    timer(3000).subscribe(()=>{
      console.log(this.otpCheckMsg.status);
      if (this.otpCheckMsg.status==='ValidOtp'){
        this.route.navigate(['/userhome']);
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Wrong OTP',
          text: 'Try Again with correct Otp',
          // footer: ''
        })
      }
      
    })
    
  } 

  toggleEditMode(){
    this.isphnoreadonly=false;
    this.otpen=false;
  }
  //real time mobile number type
  whentyped(){
    console.log(this.mobileno);
    
  }

  // storing it in the session
  userAccoutStore(mobile:any){
    console.log('causes double event ');
    this.loginservice.storingAccountId(mobile);
    // console.log(typeof(mobile.value));
    // console.log(mobile.value);

    
    
    
  }

}
