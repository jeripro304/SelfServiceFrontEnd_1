import { Component } from '@angular/core';
import { UserPostpaidService } from '../UserService/user-postpaid.service';
import { CallDet } from 'src/app/Modal/CallDet'; // Import any necessary interfaces or models.
import { timer } from 'rxjs';

@Component({
  selector: 'app-check-utilisation',
  templateUrl: './check-utilisation.component.html',
  styleUrls: ['./check-utilisation.component.css']
})
export class CheckUtilisationComponent {
  mobileno: any;
  dataUsaeg:any;
  msgdata:any;
  constructor(private usService: UserPostpaidService) {
    this.mobileno = sessionStorage.getItem("usermobileno");
    console.log('from check usage constructor');
    this.getCallLog(this.mobileno);

    this.usService.getDataUsage(this.mobileno).subscribe((msg)=>{
      console.log(msg);
      this.dataUsaeg=msg;
    })

    this.usService.getMessage(this.mobileno).subscribe((msg)=>{
      this.msgdata=msg;
      console.log(this.msgdata);
      
    })



  }
  
  callList: CallDet[] = []; // Assuming CallDet is the interface for your data.

  getCallLog(mno: any) {
    console.log(mno);
    this.usService.getCallList(mno).subscribe((calldata:CallDet[]) => { // Use the correct type (CallDet[]).
      this.callList = calldata;
      console.log('This is the data that should be iterable:');
      console.log(this.callList);
    });
  }
}

