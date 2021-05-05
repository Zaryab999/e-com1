import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[AuthService]
})
export class SignupComponent implements OnInit {


  name:string=""
  email:string=""
  password:string=""
  token:string=""
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
  }

  handleName(name: any){
    this.name = name.target.value;
  }
  handleEmail(email: any){
    this.email = email.target.value;

  }
  handlePassword(password: any){
    this.password = password.target.value;
  }




  async handleSignup( ){
    //console.log("insignup")

    if(this.name=="" || this.email == "" || this.password=="")
    {
      alert("Fill all fields");
    }

    else{

    this.authservice.signup(this.name,this.password,this.email).subscribe(async (res: any) => {
    this.name=res.Name;
    alert(`user ${this.name} Registered Sucessfully Verify your Email`)
    // this.token=res.access_token;
    // var vcode = this.token.substr(1, 10);
    // console.log(vcode)
    // this.authservice.verify(vcode);
    // },(err: any)=>{
    //   alert(err.error.message)

    },
    (err: any)=>
    {
      alert('Failed to register')
      console.log('err',err)
    });

     }
    //this.stateservice.setdata(this.name,this.email);

    //alert("OK");



  }

}
