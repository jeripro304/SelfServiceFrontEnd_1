import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { CheckUser } from 'src/app/Modal/CheckUser';
import { Status } from 'src/app/Modal/Status';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  url:string='http://localhost:8090/user'
  userBillurl:string='http://localhost:8090/billstat'
  mno:any;

  constructor(private httpClient:HttpClient) { 
    // this.mno='123'
  }

  checkuser(checkvaliduser:string){
    console.log('from the login service');
    console.log(checkvaliduser);
    console.log( typeof(checkvaliduser));
    // return this.httpClient.post<Status>(this.url,userval);
     return this.httpClient.post<Status>(this.url+'/checkuser',checkvaliduser);
  }

  sendOtp(otp:number){
    console.log(otp);
    return this.httpClient.post<Status>(this.url+"/sendotp",otp)
    
  }

  //logging in the user
  sendLoginPhNo(phno:any){

    return this.httpClient.post<Status>(this.url+"/loginphno",phno);
  }

  //verifying login via otp
  loginOtpCheck(otpno:any){
    return this.httpClient.post<Status>(this.url+"/loginotpcheck",otpno);
  }

  // storing it in the session

  userdata:any;
  storingAccountId(mobileno:any){
    console.log('in login service to fetch data');
    
   
    this.mno=mobileno.value
    console.log(this.mno);

    
    timer(500).subscribe(()=>{
      // this.httpClient.get(`${this.userBillurl+'/view'}/${mobileno.value}`).subscribe((msg)=>{this.userdata=msg});
      this.httpClient.get(`http://localhost:8090/billstat/${this.mno}`).subscribe((data) => {
        console.log(data)
        this.userdata=data;
        console.log(this.userdata.mobileno)
        sessionStorage.setItem("userData", JSON.stringify(this.userdata) );
        sessionStorage.setItem('usermobileno',this.userdata.mobileno)
        // Handle the data received from the Spring Boot API.
      });

    // timer(5000).subscribe(()=>{
    //   console.log(this.userdata.accountno);
      
    // })
    })
    
  }

}
