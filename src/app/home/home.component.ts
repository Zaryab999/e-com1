 import { Component, OnInit } from '@angular/core';
 import {LoginComponent} from 'src/app/login/login.component'
 import {StateService} from 'src/app/services/state.service'
 import {AuthService} from 'src/app/services/auth.service'// import { delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import {OnDestroy } from '@angular/core';
import {HeaderComponent} from 'src/app/header/header.component'
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ProductService]
})
export class HomeComponent implements OnInit {
  name:any='';
  constructor(  private productservice: ProductService,private router:Router,) { }
  message:string='';
  image:string='';
  data:any=[];
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

    this.productservice.getallproducts().subscribe(async(res:any)=>
    {
      this.data=res
      var c= res.length;
      console.log(this.data)
      //console.log(this.data)

     // this.image=data.Image
    },(err: any)=>{
    alert('Error Occured')
    console.log('err',err);
    }
    )

  }
 public getimage(){
  return this.image
  }

  objectKeys(obj:any) {
    return Object.keys(obj);
}
toproductdetails(id:number){
  this.router.navigateByUrl('/product-details/{id1}')
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



