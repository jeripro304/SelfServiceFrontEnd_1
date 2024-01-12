import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';

const routes: Routes = [
  {
    path:'adduser',
    component:AddUserComponent
  },{
    path:'viewfeedback',
    component:ViewFeedbackComponent
  },{
    path:'viewallusers',
    component:ViewAllUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
