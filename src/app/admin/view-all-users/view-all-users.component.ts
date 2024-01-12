import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent {

  alluser:any;
  constructor(public http:HttpClient){

    this.http.get('http://localhost:8090/user/getalluser').subscribe((msg)=>{
      this.alluser=msg;
      console.log(this.alluser);
      
    })
  }
}
