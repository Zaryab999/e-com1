import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {map} from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  name:any=""
  data:any=""
  subject = new BehaviorSubject('abc');
  login(Email :string,Password:string){
    return this.http.post<any>('/api/users/login',{Email,Password}).pipe(
      map((data)=>{
        localStorage.setItem('login-token',data.access_token)
        return data;
      }
      )

    )
  }
  updatesubject(data:any) : void{
    this.subject.next(data);
    this.name=data
    //console.log(this.name)
    //console.log(this.subject.getValue())
    //this.data=this.subject.getValue()
  }
  getsubject(){
   return this.subject.getValue();
  }
  senddata(){
    //console.log(this.name)
    return  this.name
  }

  // findOnebyemail(Email : String){
  //   return this.http.get<any>('/api/users/email',Email);
  // }

}
