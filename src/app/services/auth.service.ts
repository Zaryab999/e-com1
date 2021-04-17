import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  login(Email :string,Password:string){
    return this.http.post<any>('/api/users/login',{Email,Password}).pipe(
      map((token)=>{
        localStorage.setItem('login-token',token.access_token)
      }
      )

    )
  }
}
