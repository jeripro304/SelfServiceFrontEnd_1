import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminNavBarComponent } from './admin-nav-bar/admin-nav-bar.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';


@NgModule({
  declarations: [
    AddUserComponent,
    AdminNavBarComponent,
    AdminLoginComponent,
    ViewFeedbackComponent,
    ViewAllUsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,ReactiveFormsModule,FormsModule
  ]
})
export class AdminModule { }
