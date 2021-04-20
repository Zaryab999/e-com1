/*import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {AuthService} from 'src/app/services/auth.service'
import {StateService} from 'src/app/services/state.service'
import { BehaviorSubject, fromEvent, interval, merge } from 'rxjs';
import { EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService,StateService]
  
})
export  class LoginComponent implements OnInit {
  userName: string = '';
 @Output() login = new EventEmitter<string>();

  email: any = '';
  name:any=''
  password: any = '';
  
  userId: any;

  //public subject = new BehaviorSubject('abc');

  constructor( private router: Router, private authservice: AuthService) { }
  
  
  // subject = new BehaviorSubject(123);
  
  ngOnInit(): void {
    // this.getDetails();
    //this.setsubject(this.name);
    // this.stateservice.setdata(this.name,this.email)
    //console.log("name---", this.name)
    //this.stateservice.update(this.name)
    //this.stateservice.subject.next(this.name)
    //const abc =this.stateservice.subject.getValue()
    //console.log(abc)
  }
  
  
  public returnsubject(){
    //return this.subject.asObservable();
  }
  
  
  
  
  
  signUp(){
    this.router.navigateByUrl('/sign-up')
  }
  ToHome(){
    this.router.navigateByUrl('/home')
  }
  // onClickSubmit(data:any){
  //   console.log(data);
    
  //   alert("Entered Email id : " + data.Email);
  //   alert("Entered Password : " + data.Password);
  // }

  handleEmail(email: any){
    this.email = email.target.value;
    
  }
  handlePassword(password: any){
    this.password = password.target.value;
  }
  async handleLogin( ){
    this.authservice.login(this.email,this.password).subscribe(async (res: any) => {
      
      //console.log(res);
      // this.customerId = data.ID;
      // console.log(this.customerId);
      
    this.email=res.Email;
    this.name=res.Name;
    //console.log(this.name)
     //this.authservice.updatesubject(this.name)
     alert(`Welcome ${this.name}`)
     this.ToHome();
    },(err: any)=>{
      alert('invali Email or Password')
      console.log('err',err)
    });

    //this.stateservice.setdata(this.name,this.email);
    
    // alert("OK");
    
       

  }
 
  

  // getDetails()
  // {
  //   this.authservice.findOnebyemail(this.email).subscribe((res : any) => {
  //     console.log(res);
  //     this.userDetails = res;
  //   })
  // }
}
*/

import { Component, EventEmitter, Output,OnInit } from '@angular/core';

@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 userName: string = '';
 @Output() login = new EventEmitter<string>();
 constructor() { }

 ngOnInit() {
 }
 handleusername(user:any){
   this.userName=user.target.value;

 }
 submit()
 {
 console.log(this.userName)
 this.login.emit(this.userName);
 }

}