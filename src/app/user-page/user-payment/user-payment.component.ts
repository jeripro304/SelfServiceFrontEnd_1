import { Component } from '@angular/core';
import { UserPostpaidService } from '../UserService/user-postpaid.service';

@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.css']
})
export class UserPaymentComponent {

  billuserdata:any;
  receivedData:any;
  name:any;
  constructor(private userservice:UserPostpaidService){
    const storedData = sessionStorage.getItem("userData");
     
    if(storedData){
      console.log("sotred data");
      console.log(storedData);
      this.receivedData = JSON.parse(storedData);
      this.name=this.receivedData.name;
      
    }
    const uMobileno=sessionStorage.getItem("usermobileno");
    console.log(uMobileno);
    this.userservice.getBillInvoice(uMobileno).subscribe((msg)=>{
      console.log(msg);
      this.billuserdata=msg;
    })
    
  }
}
