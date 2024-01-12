import { Component } from '@angular/core';
import { Message } from 'src/app/Modal/Message';
import { UserPostpaidService } from '../UserService/user-postpaid.service';
import { timer } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.css']
})
export class UserMessageComponent {

  receivedData:any;
  fromNumber:any;
  constructor (private ser:UserPostpaidService){
    console.log(window.paypal);
    
    const uMobileno=sessionStorage.getItem("usermobileno");
    this.fromNumber=uMobileno;
    console.log('this is from the constructor of bill');
    
    const storedData = sessionStorage.getItem("userData");
     
    if(storedData){
      console.log("sotred data");
      console.log(storedData);
      this.receivedData = JSON.parse(storedData);
      
    }
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
  toNumber:any;
  message:any;
  dispmsg:any;
  time:string =this.setCurrentTime();
  usermsg:any='';
  mess:Message=new Message(0,0,0,'','',0)
  sendMessage(){
    this.mess.fromMobile=this.fromNumber;
    this.mess.toMobile=this.toNumber;
    this.mess.msg=this.message;
    this.mess.msgTime=this.time;
    console.log(this.mess);
    
    this.ser.updateMessage(this.mess).subscribe((msg)=>{
      this.dispmsg=msg;
      this.usermsg=this.dispmsg.status;
      timer(100).subscribe(()=>{
        console.log(this.dispmsg.status);
        if (this.dispmsg.status==='Message Limit Reached'){
          Swal.fire({
            icon: 'error',
            title: 'Message cant be Sent',
            text: this.dispmsg.status,
            // footer: '<a href="">Why do I have this issue?</a>'
          })
        }
      })
      
      
      
    })
    
  }




  

}
