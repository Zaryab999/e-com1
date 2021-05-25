import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import{LoginComponent} from './login/login.component'
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent} from './home/home.component';
import  {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component'
import{VerificationComponent} from './verification/verification.component'
import{ChangepasswordComponent} from'src/app/changepassword/changepassword.component'
import {AuthGuardService} from 'src/app/services/auth-guard.service'
import {CartComponent} from 'src/app/cart/cart.component'
//import {ProductDetailsComponent} from'src/app/product-details/product-details.component'
  const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'sign-up', component: SignupComponent},
  // { path: 'product-detail', component: ProductDetailsComponent},
  { path: 'home/:name', component: HomeComponent,canActivate:[AuthGuardService]},
  {path:'header',component:HeaderComponent},
  {path:'forgot',component:ForgotpasswordComponent},
  {path:'verify/:token/:id',component:VerificationComponent},
  {path:'changepass/:token/:id',component:ChangepasswordComponent},
  {path:'product-details/:id',component:ProductDetailsComponent,canActivate:[AuthGuardService]},
  {path:'cart',component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
