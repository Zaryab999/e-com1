import { Component, OnInit } from '@angular/core';
import {AuthService} from'src/app/services/auth.service'
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  email:string=""
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
  }
  handleEmail(email: any){
    this.email = email.target.value;

  }
  handle_ch_pass(){
    this.authservice.changepass(this.email);
  }
}
