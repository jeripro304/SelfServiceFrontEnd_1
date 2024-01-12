import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { RegisterComponent } from './register/register.component';
import { LoginHomeComponent } from './login-home/login-home.component';
import { UserHomeComponent } from '../user-page/user-home/user-home.component';
import { AdminLoginComponent } from '../admin/admin-login/admin-login.component';
import { PlansComponent } from './plans/plans.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'signup',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginHomeComponent
  },{
    path:'userhome',
    component:UserHomeComponent
  },
  {
    path:'adminlogin',
    component:AdminLoginComponent
  },{
    path:"plans",
    component:PlansComponent
  }
  // {
  //   path:'homeviewplans',
  //    component:
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginPageRoutingModule { }
