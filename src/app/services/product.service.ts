import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
import {HttpClient, HttpHeaders, HttpParams} from'@angular/common/http';

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
            return data;
          }
          )

        )

      }
}
