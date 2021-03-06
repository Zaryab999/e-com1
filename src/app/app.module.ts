import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { AdminScreenComponent } from './admin-screen/admin-screen.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { VerificationComponent } from './verification/verification.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { CartComponent } from './cart/cart.component';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ProductDetailsComponent,
    AdminScreenComponent,
    HeaderComponent,
    ForgotpasswordComponent,
    VerificationComponent,
    ChangepasswordComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    NgImageSliderModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
