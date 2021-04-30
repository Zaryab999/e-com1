 import { Component, OnInit } from '@angular/core';
 import {LoginComponent} from 'src/app/login/login.component'
 import {StateService} from 'src/app/services/state.service'
 import {AuthService} from 'src/app/services/auth.service'// import { delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import {OnDestroy } from '@angular/core';
import {HeaderComponent} from 'src/app/header/header.component'
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ProductService]
})
export class HomeComponent implements OnInit {
  name:any='';
  constructor(  private productservice: ProductService) { }
  message:string='';
  //subscription: Subscription = new Subscription;

  ngOnInit(): void {
    //  this.alert()

    //  this.authservice.subject.subscribe(res => {
    //   console.log('res',res)
    //   this.name = res
    //   });
  //   this.authservice.messageSource.subscribe((data) => {
  //     console.log(data)});

  // this.authservice.currentMessage.subscribe((mes) =>{
  //   this.message=mes

    //console.log(this.authservice.currentMessage)
    // const a=this.authservice.messageSource.value
    // console.log(a)
    this.productservice.getallproducts().subscribe(async(data:any)=>
    {
      var c= data.length;
      console.log(data)
    },(err: any)=>{
    alert('Error Occured')
    console.log('err',err);
    }
    )

  }


  }/*
    ngOnDestroy() {
    this.subscription.unsubscribe();
  }*/
  // display(){
  //   console.log(this.message);
  //   }

  // alert(){
  //   //  const data= this.authservice.name;
  //   //  console.log(data);
  //   this.name=this.authservice.getdata()
  //   console.log(`${this.name} in home`)



  // }


  //this.authservice.subject.getValue();

      //console.log(res);
      // this.customerId = data.ID;
      // console.log(this.customerId);


    //console.log(this.name)






