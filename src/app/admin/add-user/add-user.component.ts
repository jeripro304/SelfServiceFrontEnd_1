import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddUserService } from '../AdminService/add-user.service';
import { Status } from 'src/app/Modal/Status';
import { timer } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  adduser:FormGroup;
  User:any;
  stat:any;
  s:any;
  
  constructor(private adminservice:AddUserService){
    this.adduser = new FormGroup({
      fname: new FormControl('',[Validators.required, Validators.minLength(3)]),
      lname:new FormControl('',[Validators.required, Validators.minLength(3)]),
      dob:new FormControl('',[Validators.required]),
      plan:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      mobileno:new FormControl('',[Validators.required]),
      service:new FormControl('',[Validators.required]),
      address:new FormControl('',[Validators.required]),
      state:new FormControl('',[Validators.required]),
      city:new FormControl('',[Validators.required]),
      zip:new FormControl('',[Validators.required])
    })
  }

  userRegistration(){
    console.log(this.adduser.value);
    this.adminservice.addUser(this.adduser.value).subscribe((msg)=>{this.stat=msg});
    // this.adminservice.addUser(this.adduser.value).subscribe((msg)=>{this.st=msg});
    timer (7000).subscribe(() => {
      console.log('After 7-second delay...');
      console.log(this.stat.status);
      this.s=this.stat.status
      if (this.s==='created'){
        // alert("User Registration Successful")
        Swal.fire(
          'Registration Successful!',
          '',
          'success'
        )
      }
      else{
        // alert("Something went wrong please recheck your credentials")
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong please recheck your credentials!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    }); 
  }
    indianStates = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Lakshadweep',
    'Delhi',
    'Puducherry',
  ];
}

