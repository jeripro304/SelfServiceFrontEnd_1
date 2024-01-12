import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/Modal/Feedback';

@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  styleUrls: ['./user-feedback.component.css']
})
export class UserFeedbackComponent {

  username:string='';
  email:string=''
  feedbackmsg:string='';

  userD:any;
  constructor(public http:HttpClient,public route:Router){

    const storedData = sessionStorage.getItem("userData");
     
    if(storedData){
      console.log("sotred data");
      console.log(storedData);
      this.userD = JSON.parse(storedData);
      
    }
    

  }
  feed:Feedback=new Feedback(0,'','','')
  submitFeedback(){
    console.log(this.feedbackmsg,this.email,this.username);

    this.feed.email=this.email
    this.feed.feedbackmsg=this.feedbackmsg
    this.feed.username=this.username

    this.http.post("http://localhost:8090/feedback",this.feed).subscribe();
    this.route.navigate(['/userhome'])
  }
  // navi(){
  //   this.route.navigate(['/userhome'])
  // }
}
