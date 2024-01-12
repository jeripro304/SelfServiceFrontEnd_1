import { Component } from '@angular/core';
import { UserPostpaidService } from '../UserService/user-postpaid.service';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css']
})
export class UserProfilePageComponent {

  receivedData:any;
  plan:any
  userData:any;
  constructor (private usService:UserPostpaidService){
    
    
    const uMobileno=sessionStorage.getItem("usermobileno");
    
    this.usService.getProSyncUserDetails(uMobileno).subscribe((msg)=>{
      console.log(msg);
      this.userData=msg;
      
    })

    const storedData = sessionStorage.getItem("userData");
     
    if(storedData){
      console.log("sotred data");
      console.log(storedData);
      this.receivedData = JSON.parse(storedData);
      this.plan=this.receivedData.planAmount
    }


  }
}
