import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderComponent } from './order/order.component';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ProductDetailsComponent,
    OrderComponent,
    AdminScreenComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
