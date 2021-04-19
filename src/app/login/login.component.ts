import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {AuthService} from 'src/app/services/auth.service'
import {StateService} from 'src/app/services/state.service'
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
  
})
export class LoginComponent implements OnInit {

  email: any = '';
  name:any=''
  password: any = '';
  
  userId: any;

  constructor( private router: Router, private authservice: AuthService,private stateservice:StateService) { }
  
  ngOnInit(): void {
    // this.getDetails();
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
  handleLogin( ){
    this.authservice.login(this.email,this.password).subscribe((res: any) => {
      //console.log(res);
      
      // this.customerId = data.ID;
      // console.log(this.customerId);
      this.email=res.Email;
      this.name=res.Name;
      
      this.stateservice.setdata(this.name,this.email)
      this.ToHome();
       
    },(err: any)=>{
      alert('invali Email or Password')
      console.log('err',err)
    });
  }
 
  

  // getDetails()
  // {
  //   this.authservice.findOnebyemail(this.email).subscribe((res : any) => {
  //     console.log(res);
  //     this.userDetails = res;
  //   })
  // }
}
