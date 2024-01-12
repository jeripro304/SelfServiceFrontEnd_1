import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from 'src/app/Modal/Status';

import { User } from 'src/app/Modal/User';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  constructor(private httpClient:HttpClient) { }
  

  url:string='http://localhost:8090/admin'
  addUser(userval:User){
    console.log(userval);
    console.log('from admin service');
    
    // to print the return status from boot but doesnt work
    return this.httpClient.post<Status>(this.url,userval);
    
    // return this.httpClient.post<Status>(this.url,userval)
  }

}
