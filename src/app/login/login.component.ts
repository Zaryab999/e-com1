import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {AuthService} from 'src/app/services/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
  
})
export class LoginComponent implements OnInit {

  email: any = '';
  password: any = '';

  constructor( private router: Router, private authservice: AuthService) { }
  
  ngOnInit(): void {
  }
  signUp(){
    this.router.navigateByUrl('/sign-up')
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
  handleLogin(){
    this.authservice.login("z@s.com","1234").subscribe(data=>console.log("succes"),err=>{
      console.log('err',err)
    });
  }
  
}
