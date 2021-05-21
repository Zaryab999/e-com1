import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
import {HttpClient, HttpHeaders, HttpParams} from'@angular/common/http';
//import {HttpClient, HttpHeaders, HttpParams} from'@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {}
  getallproducts(){
    // this.messageSource.subscribe((data) => {
    //   console.log(data)});
    return this.http.get<any>('/api/products/all').pipe(
           map((data)=>{
           // localStorage.setItem('login-token',data.access_token)
           //console.log(data)
           return data;

          }
          )

        )

      }
      findoneproduct(ID:number){
        console.log(ID)
        return this.http.get<any>(`/api/products/${ID}`).pipe(
          map((data)=>{
            return data;
          })
        )
      }

      product_details(ID:number){
        return this.http.get<any>(`/api/products/details/${ID}`).pipe(
          map((data)=>{
            return data
          })
        )

      }


}
