// import { Injectable } from '@angular/core';
// import {HttpClient} from'@angular/common/http';
// import {map} from 'rxjs/operators'
// import { BehaviorSubject } from 'rxjs';
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor(private http:HttpClient) { }
//   name:string=''
//   data:any
//   subject = new BehaviorSubject<string | null>(null);
//   login(Email :string,Password:string){
//     return this.http.post<any>('/api/users/login',{Email,Password}).pipe(
//       map((data)=>{
//         localStorage.setItem('login-token',data.access_token)
//         return data;
//       }
//       )

//     )
//   }
//   updatesubject(data:string) : void{
//     this.subject.next(data);
//     //this.name=data
//     //console.log(this.name)
//     //console.log(this.subject.getValue())
//     //this.data=this.subject.getValue()
//   }
//   setdata(name:string){
//     this.name=name
//     console.log(`${this.name} in auth`)
//   }
//   getdata():string{
//     //console.log(this.name)
//     //console.log(this.name)
//     return  this.name
//   }

//   // findOnebyemail(Email : String){
//   //   return this.http.get<any>('/api/users/email',Email);
//   // }

// }
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from'@angular/common/http';
import {map} from 'rxjs/operators'
@Injectable({
     providedIn: 'root'
   })
export class AuthService  {

  public messageSource = new BehaviorSubject<string>('default message');
  public currentMessage = this.messageSource.getValue();

  constructor(private http:HttpClient) { }
  name:string=''
  data:any
  code:any
    login(Email :string,Password:string){
    // this.messageSource.subscribe((data) => {
    //   console.log(data)});
    return this.http.post<any>('/api/users/login',{Email,Password}).pipe(
           map((data)=>{
            localStorage.setItem('login-token',data.access_token)
            return data;
          }
          )

        )

      }
      signup(Name:string,Password:string,Email:string){
        //console.log("inauth")
      return this.http.post<any>('/api/users/register',{Name,Password,Email}).pipe(
        map((data)=>{
          return data;
        }
        )
      )

      }
      verify(vtoken:string,ID:number){
        // let httpheader = new HttpHeaders();
        // let parameters= new HttpParams();

        // parameters=parameters.append("ID",ID);
        // parameters=parameters.append("vtoken",vtoken);
        return this.http.post<any>('/api/users/verify',{ID,vtoken}).pipe(
          map((data)=>{
            return data;
          }
          )
        )
      }
      changepassreq(Email:string){
        console.log(Email)
          return this.http.post<any>('/api/users/changepassreq',{Email}).pipe(
            map((data)=>{
              return data;
            }
            )
          )
      }
      up_changepass(Password:any,vtoken:any){
        console.log("in change pass")
        console.log(Password)
        console.log(vtoken)
          return this.http.post<any>('/api/users/changepass',{Password,vtoken}).pipe(
            map((data)=>{
              return data;
            }
            )
          )

      }

      // up_ver_st(ID:number,vtoken:string) {
      //   console.log("in front end up_vr")

      //   return this.http.post<any>('/api/users/up_ver_st',{ID,vtoken});
      // }

      getcode(){
        return this.code
      }


  changeMessage(message: string) {
    this.messageSource.next(message)
   //console.log(this.messageSource.value);

  }
  setdata(name:string){
        this.name=name
        console.log(`${this.name} in auth`)
      }
      getdata():string{
             //console.log(this.name)
             //console.log(this.name)
            return  this.name
        }
  getmessage(){
    return this.messageSource.value
  }

}
