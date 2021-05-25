import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {CartService} from 'src/app/services/cart.service'
//import {angular} from '@angular/cli'
import * as angular from "angular";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productno:number=0
  products:any
  cartproduct_detais:any=[]
  sizes:any
  //colo


  constructor(private cartservice:CartService) {}

  ngOnInit(): void {
    this.getproduct_Ids()
    //this.getsize()
    this.get_cart_products_details()
    
  }
  getproduct_Ids(){
    // this.products=localStorage.getItem("products")
    // console.log(this.products)
    //this.colo
    this.products=this.cartservice.getCartItems()
    console.log(this.products)
    console.log(this.products.length)
  }
  get_cart_products_details(){
    for(let i=0;i<this.products.length;i++)
    {

    this.cartservice.getorderedproduct_details(this.products[i].U_Pd_ID).subscribe((data)=>{
      this.cartproduct_detais.push(data)
      //console.log(data)
      return data
    }
    )
    }
    console.log(this.cartproduct_detais)
}
Place_Oder(){
  
}
  getsize(){
    this.sizes=this.cartservice.getsize()
    console.log(this.sizes)
  }
  Getproductno(){
    this.productno=this.productno+1
    console.log(this.productno)
    return this.productno
    
  }
}
