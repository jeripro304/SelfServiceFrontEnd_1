import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPageRoutingModule } from './user-page-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserNavBarComponent } from './user-nav-bar/user-nav-bar.component';
import { UserPaymentComponent } from './user-payment/user-payment.component';
import { ViewplansComponent } from './viewplans/viewplans.component';
import { CheckUtilisationComponent } from './check-utilisation/check-utilisation.component';
import { BillComponent } from './bill/bill.component';
import { UserPostPaidComponent } from './user-postpaid/user-postpaid.component';
import { UserCallingComponent } from './user-calling/user-calling.component';
import { FormsModule } from '@angular/forms';
import { UserMessageComponent } from './user-message/user-message.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { UserFeedbackComponent } from './user-feedback/user-feedback.component';


@NgModule({
  declarations: [
    UserHomeComponent,
    UserNavBarComponent,
    UserPaymentComponent,
    ViewplansComponent,
    CheckUtilisationComponent,
    BillComponent,UserPostPaidComponent, UserCallingComponent, UserMessageComponent, UserProfilePageComponent, UserFeedbackComponent
    
  ],
  imports: [
    CommonModule,
    UserPageRoutingModule,FormsModule
  ]
})
export class UserPageModule { }
