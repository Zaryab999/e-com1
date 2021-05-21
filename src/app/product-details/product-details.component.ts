import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import {ProductService} from 'src/app/services/product.service'
import { Router, CanActivate } from '@angular/router';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private productservice:ProductService,private router:Router,private cartservice:CartService) { }
  public ID:number=0
  data:any
  data2:any
  size:any=1
  color:any=1
  i=0
  a:string=''
  lsp:any
  abc:any
  ab:any
  v1:any=[]

  ngOnInit(): void {



    const routeParams = this.activatedRoute.snapshot.paramMap;
    this.ID = Number(routeParams.get('id'));
    //console.log(this.ID)
    this.getdetails(this.ID)
    this.findoneproduct(this.ID)

  }
   sizes:any=[];
  COLLECTION: Array<object> = [];
  col:any

  imgCollection: Array<object> = [
    {
      image: 'https://loremflickr.com/g/600/400/paris',
      thumbImage: 'https://loremflickr.com/g/1200/800/paris',
      alt: 'Image 1',
      title: 'Image 1'
    }, {
      image: 'https://loremflickr.com/600/400/brazil,rio',
      thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
      title: 'Image 2',
      alt: 'Image 2'
    }, {
      image: 'https://loremflickr.com/600/400/paris,girl/all',
      thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
      title: 'Image 3',
      alt: 'Image 3'
    }, {
      image: 'https://loremflickr.com/600/400/brazil,rio',
      thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
      title: 'Image 4',
      alt: 'Image 4'
    }, {
      image: 'https://loremflickr.com/600/400/paris,girl/all',
      thumbImage: 'https://loremflickr.com/1200/800/paris,girl/all',
      title: 'Image 5',
      alt: 'Image 5'
    }, {
      image: 'https://loremflickr.com/600/400/brazil,rio',
      thumbImage: 'https://i.picsum.photos/id/609/400/350.jpg',
      title: 'Image 6',
      alt: 'Image 6'
    }
];

  // Fetching Details of Product from DB

  getdetails(id:number)
  {
    this.productservice.product_details(this.ID).subscribe((res)=>{
      this.data=res
      //localStorage.setItem('data',this.data)
      //console.log(this.data);
      this.color=res[0].Pd_ID
      this.insertDetails();
    },(err:any)=>{
      alert('Error')
      console.log('error',err)
    });

  }

  insertDetails()
  {
    //console.log("func call");
    //this.COLLECTION=this.COLLECTION.slice(0,this.COLLECTION.length-this.COLLECTION.length)
    this.COLLECTION=[]
    this.data.forEach((x:any) =>
    {
      if(x.F_ID==4 && x.Pd_ID==this.color)
      {
        this.COLLECTION.unshift({ image: x.Feature_Value, thumbImage: x.Feature_Value,colour:this.color});
      }
      else
      {}
    });
   //console.log("COLLECTION",this.COLLECTION);

  }

  findoneproduct(ID:number){
      this.productservice.findoneproduct(this.ID).subscribe((data)=>
      {
        this.data2=data
        //console.log(this.data2);
      },(err: any)=>{
        alert('Error')
        console.log('err',err)
      });

    }
  SizeChange(event:any){//console.log(event)
    this.size=event.target.value
    //console.log(this.size)

  }
  ColorChange(event:any){ //console.log(event)

    this.color=event.target.value
    //console.log(this.color)

    this.insertDetails()

  }
  addtocart(prodetails:any){
    //alert("item added to cart")
    // this.cartservice.addToCart(this.data).subscribe((data)=>
    // {
    //   alert(data)

    // },(err: any)=>{
    //   alert('Error')
    //   console.log('err',err)
    // }

    // )
    // this.v1= localStorage.getItem('products')
    // this.v1=JSON.parse(this.v1)
    this.cartservice.addToCart(this.color,this.size).subscribe((data:any)=>{

    console.log(data)
    //console.log(this.v1)

      if(data==true)
        alert("product already exist")
      else
      alert("item added to cart")
    },(err: any)=>{
      alert('Failed')
      console.log('err',err)
    });
    //console.log(this.size)


    //this.sizes=localStorage.getItem('size')
    // this.sizes=JSON.parse(this.sizes)

   // console.log(this.sizes)

    //this.ab=localStorage.getItem('size')
    //this.ab=JSON.parse(this.ab)
    //console.log(this.ab[6].size)

    //console.log(prodetails)
    //this.lsp=this.cartservice.getCartItems()
    //console.log(this.lsp)
    //console.log("abc")
      //console.log(this.data2);
    this.router.navigateByUrl('/home')
  }
  // updateindex(i:any){
  //   console.log(i)
  //   this.a=i
  //   console.log(this.a.length)
  // }




}
