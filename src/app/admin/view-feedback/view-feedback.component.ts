import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent {

  feedBackData:any;
  constructor(public http:HttpClient){

    this.http.get('http://localhost:8090/feedback').subscribe((msg)=>{
      this.feedBackData=msg;
      console.log(this.feedBackData);
    })
  }

}
