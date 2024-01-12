import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserPostpaidService } from '../UserService/user-postpaid.service';
import { timer, toArray } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  billamt:number;
  amount:any;
  receivedData:any;
  constructor (private userService:UserPostpaidService,private route:Router){
    console.log(window.paypal);
    
    const uMobileno=sessionStorage.getItem("usermobileno");
    console.log('this is from the constructor of bill');
    
    const storedData = sessionStorage.getItem("userData");
     
    if(storedData){
      console.log("sotred data");
      console.log(storedData);
      this.receivedData = JSON.parse(storedData);
      
    }
    this.billamt=(this.receivedData.totalBillAmount/83)
    this.amount= Math.round(this.billamt)
    // console.log(this.billamt);
    console.log(this.amount);
    
    
    console.log('from the bill comp');
    console.log(uMobileno);
    this.getUserDetailsBill(uMobileno)
    
    

  }
  @ViewChild ('paymentRef',{static:true}) paymentRef!:ElementRef;
  ngOnInit(): void {
    if(this.paymentRef){
      window.paypal.Buttons(
        {

          style:{
            layout: 'horizontal',
            color: 'blue',
            shape: 'rect',
            label: 'paypal',
          },
          createOrder:(data:any, actions:any)=>{
            return actions.order.create({
              purchase_units:[
                {
                  amount:{
                    value: (this.amount), //this is where amount should be given
                    currency_code: 'USD',
                  }

                }
              ]
            })
          },
          onApprove:(data:any, actions:any)=>{
// after payment success
            return actions.order.capture().then((details:any)=>{
              console.log(details);
              
              if(details.status === 'COMPLETED'){
                this.paynow()
               
                // this.uservice.payBill(this.receivedData.number).subscribe();
                // this.uservice.billHistory(this.receivedBill).subscribe();
                Swal.fire("Payment successfull",'Transaction ID: '+details.id,'success')
              }
            })
          },
          onError:(error:any)=>{
            // if not successful
            Swal.fire('There are no Due Payments')
            console.log(error);
          }
        }
      ).render(this.paymentRef.nativeElement)
    }
  }


  public paybtn:boolean=false;
  userdata:any;
  totalBillAmount:any
  getUserDetailsBill(mobileno:any){
    console.log(mobileno);
    this.userService.getUserDetails(mobileno).subscribe((data) => { console.log(data);
      this.userdata=data;
      this.totalBillAmount=this.userdata.totalBillAmount
      sessionStorage.setItem("userData",JSON.stringify(this.userdata))
      console.log(this.userdata);
      console.log(this.userdata.status);
      console.log(this.totalBillAmount);
      
      
      if (this.userdata.status==='paid'){
       
        this.paybtn=!this.paybtn;
      }
      else{
         this.paybtn=this.paybtn;
      }
    })
    console.log(this.totalBillAmount);
  }
  mno:any;
  stat:any;
  paynow(){
    console.log("paynow happens");
    console.log(this.userdata.mobileno);
    this.mno=this.userdata.mobileno;
    this.userService.paymentUpdate(this.mno).subscribe((msg)=>{
      this.stat=msg; 
      
      timer(1000).subscribe(()=>{
        console.log(this.stat.status); 
        
      })
    })
    
    
  }

  logout(){
    // sessionStorage.removeItem("availableGB")
    //   sessionStorage.removeItem("userData")
    //   sessionStorage.removeItem("usermobileno")
      this.route.navigate(['/userhome']);
  }
  
  
}
