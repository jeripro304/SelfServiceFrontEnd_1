import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { BillingStat } from 'src/app/Modal/BillingStat';
import { Status } from 'src/app/Modal/Status';
import { CallDet } from 'src/app/Modal/CallDet';
import { Call } from '@angular/compiler';
import { DataUsage } from 'src/app/Modal/DataUsage';

@Injectable({
  providedIn: 'root'
})
export class UserPostpaidService {

  url:any='http://localhost:8090/billstat';
  callurl:any='http://localhost:8090/call'

  constructor(private http:HttpClient) { 
    
  }

  getUserDetails(accno:any){
    
    return this.http.get(`http://localhost:8090/billstat/${accno}`);
    
  }

  BillingStat:BillingStat=new BillingStat(0,'',0,0,0,0,0,new Date(),new Date(),new Date(),0,'',0,0,0,new Date(),0.0,0,0)
  reduceDataUsage(userid:any,gb:any){
    console.log(userid,gb+"from the updating the gb in db");

    // const currentDate=new Date();
    // const date =new DatePipe('en-Us');
    // const formatteddatee= date.transform(currentDate);
    // console.log(formatteddatee);
    

    this.BillingStat.acccountno=userid.acccountno
    this.BillingStat.userStatId=userid.userStatId
    // this.BillingStat.expiringDays=gb;
    this.BillingStat.availableGB=gb;
    this.BillingStat.availableGB=gb;
    console.log(this.BillingStat);
    return this.http.put(this.url+"/updateGb",this.BillingStat);
  }

  paymentUpdate(mobileno:any){
    return this.http.post<Status>(this.url+"/payment",mobileno);
   
  }

  // call send
  Call:CallDet=new CallDet('','',new Date(),'','');
  callSend(frommobile:string,tomobileno:string,todayDate:Date,currenttimer:string,callDuration:string){
    console.log("from the call service");
    this.Call.fromMobile=frommobile
    this.Call.toMobile=tomobileno
    this.Call.todaydate=todayDate
    this.Call.curTime=currenttimer
    this.Call.duration=callDuration
    console.log(this.Call);
    
    this.http.post(this.callurl,this.Call).subscribe();
  }

  // getting the call log list from the db
  getCallList(mobileno:any){
    console.log(mobileno+'from the getting of call log');
    
    return this.http.get<CallDet[]>(`http://localhost:8090/call/${mobileno}`)
  }
  
  // to get billing history
  getBillInvoice(mobileno:any){
    return this.http.get(`http://localhost:8090/billhistory/${mobileno}`);
  }


  // to get notification
  getNotification(mobileno:any){
    return this.http.get(`http://localhost:8090/notify/${mobileno}`)
  }
// to delete the notification
  deleteNotify(id:any){
    return this.http.delete(`http://localhost:8090/notify/${id}`)
  }

  // to update the data usage
  updateData(data:any){
    console.log('updating the data');
    console.log(typeof(data));
    this.http.post('http://localhost:8090/datausage',data).subscribe();
  } 

  // get Data
  getDataUsage(mno:any){
    return this.http.get(`http://localhost:8090/datausage/${mno}`);
  }

  // getting all the prosync user details
  getProSyncUserDetails(mno:any){
    return this.http.get(`http://localhost:8090/user/${mno}`)
  }

  // this is message sending and get service

  updateMessage(msg:any){
    return this.http.post <Status>('http://localhost:8090/msg',msg);
  }

  getMessage(mno:any){
    return this.http.get(`http://localhost:8090/msg/${mno}`);
  }
}
