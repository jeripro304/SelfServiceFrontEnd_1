import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginHomeComponent } from './login-home/login-home.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlansComponent } from './plans/plans.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    LoginHomeComponent,
    LoginHeaderComponent,
    RegisterComponent,
    PlansComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule,ReactiveFormsModule
  ]
})
export class LoginPageModule { }
