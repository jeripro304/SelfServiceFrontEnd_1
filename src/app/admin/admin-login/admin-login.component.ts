import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  username:any;
  pass:any

  constructor(private route:Router){}
  submit(){
    console.log(this.username);
    console.log(this.pass);
    
    
    if(this.username==='admin' && this.pass==='1234'){
      this.route.navigate(["/adduser"])
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Wrong password',
        // text: 'Something went wrong!',
        // footer: '<a href="">Why do I have this issue?</a>'
      })
    }
  }


}
