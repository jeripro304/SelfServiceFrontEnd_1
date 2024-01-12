import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewplansComponent } from './viewplans/viewplans.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { LoginHeaderComponent } from '../login-page/login-header/login-header.component';
import { CheckUtilisationComponent } from './check-utilisation/check-utilisation.component';
import { BillComponent } from './bill/bill.component';
import { UserCallingComponent } from './user-calling/user-calling.component';
import { UserPaymentComponent } from './user-payment/user-payment.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { UserMessageComponent } from './user-message/user-message.component';
import { UserFeedbackComponent } from './user-feedback/user-feedback.component';

const routes: Routes = [
  {
    path:'viewplans',
    component:ViewplansComponent
  },
  {
    path:'userhome',
    component:UserHomeComponent
  },{
    path:'loginpage',
    component:LoginHeaderComponent
  },{
    path:'checkusage',
    component:CheckUtilisationComponent
  },
  {
    path:'Outstandingbill',
    component:BillComponent
  },
  {
    path:'call',
    component:UserCallingComponent
  },
  {
    path:'billHistory',
    component:UserPaymentComponent
  },
  {
    path:'userprofile',
    component:UserProfilePageComponent
  },
  {
    path:'message',
    component:UserMessageComponent
  },
  {
    path:'feedback',
    component:UserFeedbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPageRoutingModule { }
