import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { stringify } from '@angular/compiler/src/util';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  productids:Array<number>=[]
  item:any
  size:any
  check:any=[]
  check1:any=[]
  data:any
  ispresent=false
  abc:any
  sizes:any=[];
  temforispresent:any
  ordered_product_id:any
  constructor(private http: HttpClient) { }
  getAllProducts() {
    return this.http.get('/api/products/all');
  }

  // addToCart(id:any,size:any)
  // {
  //   this.check=localStorage.getItem('products');
  //   this.check=JSON.parse(this.check)
  //   //console.log(this.check.length)

  //   this.check1=localStorage.getItem('size');
  //   this.check1=JSON.parse(this.check1)
  //   //console.log(this.check1.length)
  //   var i
  //   var j
  //   if(this.check!=null)
  //   {
  //     console.log("in addtocart if")
  //   for( j=0;j<this.check1.length;j++)
  //   {
  //     for(i=0;i<this.check.length;i++)
  //     {
  //     // console.log(this.check[i].Pd_ID)
  //     // console.log(this.check1[i].size)
  //       if(this.check[i].Pd_ID==id && this.check1[j].size==size)
  //       {
  //       //   this.loadinlocalStorage(id).subscribe(async (data)=>{
  //       // //      this.data=data
  //       // //   },(err: any)=>{
  //       // //     alert('invali Email or Password')
  //       // //     console.log('err',err)
  //       //   });
  //         this.ispresent=true
  //       }
  //     }

  //     }
  //   }

  //   return this.http.get(`/api/products/specdetails/${id}`).pipe(
  //     map((data:any)=>{
  //       console.log(this.ispresent)
  //       if(this.ispresent==false){
  //         console.log("abc")
  //         this.abc=localStorage.getItem('products')
  //         this.check = localStorage.getItem('products') ? JSON.parse(this.abc):[];
  //             data.forEach((x:any) =>
  //             {
  //               this.check.push({ID:x.ID,F_ID:x.F_ID,Pd_ID:x.Pd_ID,Feature_Value:x.Feature_Value});
  //             });
  //         //this.check.push({ID:data.ID,F_ID:data.F_ID,Pd_ID:data.Pd_ID,Feature_Value:data.Feature_Value})
  //         console.log(this.check)
  //         localStorage.setItem('products',JSON.stringify(this.check))

  //         //localStorage.setItem('products',JSON.stringify(data))
  //         this.setsize(id,size)
  //       }
  //       this.temforispresent=this.ispresent
  //       this.ispresent=false
  //       return this.temforispresent

  //     })
  //   )
  //  //return this.data
  //   //console.log("in addd to cart")




  //   //this.productids.push(id)
  //   //localStorage.setItem('products',JSON.stringify(productdetails))

  // }

  // addToCart(color:any,size:any){
  //   this.getorderedproduct_id(color,size).subscribe((data:any)=>{
  //     console.log(data);
  //     this.ordered_product_id=data[0].Pd_ID
      
  //   })
  //   console.log(this.ordered_product_id)
  //   return this.ordered_product_id

  // }
  addToCart(color:any){
    this.check=localStorage.getItem('products');
    console.log(this.check)
    console.log(color)
    if(this.check==null)
    {
      this.check=this.check || [];
      this.check.push(color);
      localStorage.setItem('products',this.check)
      console.log(this.check)
      return this.check;
    }
    else
    {
      this.check.push(color);
      localStorage.setItem('products',this.check)
      console.log(this.check)
      return this.check;  
    }
      
    //this.check=JSON.parse(this.check)
  //   //console.log(this.check.length)

  //   this.check1=localStorage.getItem('size');
  //   this.check1=JSON.parse(this.check1)
  //   //console.log(this.check1.length)
  //   var i
  //   var j
  //   if(this.check!=null)
  //   {
  //     console.log("in addtocart if")
  //   for( j=0;j<this.check1.length;j++)
  //   {
  //     for(i=0;i<this.check.length;i++)
  //     {
  //     // console.log(this.check[i].Pd_ID)
  //     // console.log(this.check1[i].size)
  //       if(this.check[i].Pd_ID==id && this.check1[j].size==size)
  //       {
  //       //  this.loadinlocalStorage(id).subscribe(async (data)=>{
  //       // //      this.data=data
  //       // //   },(err: any)=>{
  //       // //     alert('invali Email or Password')
  //       // //     console.log('err',err)
  //       //   });
  //         this.ispresent=true
  //       }
  //     }

  //     }
  //   }

  }
  getorderedproduct_id(color:any,size:any){
    console.log(color,size)
    return this.http.get(`/api/products/unique/${color}/${size}`).pipe(map((data)=>{
      console.log(data)
      return data;

    })
    )
  }
  setsize(color:any,size:any){
    this.abc=localStorage.getItem('size')
    this.sizes = localStorage.getItem('size') ?
               JSON.parse(this.abc):[];
    this.sizes.push({size:size,color:color})
    localStorage.setItem('size',JSON.stringify(this.sizes))

  }
  getCartItems()
  {
    this.item = localStorage.getItem('products');
    //console.log(this.item)
    this.item= JSON.parse(this.item)
    return this.item
    //localStorage.getItem('products')
    //return item;
  }
  getsize(){
    this.size=localStorage.getItem('size');
    this.size=JSON.parse(this.size)
    return this.size
  }
  increaseQty(payload:any) {
    return this.http.post('/car', payload);
  }
  emptyCart() {
    return this.http.delete('/cart/empty-cart');
  }
}
