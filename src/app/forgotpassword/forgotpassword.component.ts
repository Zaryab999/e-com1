import { Component, OnInit } from '@angular/core';
import {AuthService} from'src/app/services/auth.service'
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
  providers:[AuthService]
})
export class ForgotpasswordComponent implements OnInit {
  email: any = '';
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
  }
  handleEmail(email: any){

    this.email = email.target.value;
    console.log(this.email)
  }
  handle_ch_pass(){
    this.authservice.changepassreq(this.email).subscribe((data=>{
        alert("A link has been sent to your email");
    }),(err: any)=>
    {
      alert('Failed to send mail to this address')
      console.log('err',err)
    }
    );
  }
}
