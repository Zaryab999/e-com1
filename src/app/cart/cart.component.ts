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
  products:any
  sizes:any
  //colo


  constructor(private cartservice:CartService) {}

  ngOnInit(): void {
    this.getproducts()
    this.getsize()
  }
  getproducts(){
    // this.products=localStorage.getItem("products")
    // console.log(this.products)
    //this.colo
    this.products=this.cartservice.getCartItems()
    console.log(this.products)
  }
  getsize(){
    this.sizes=this.cartservice.getsize()
    console.log(this.sizes)
  }
}
