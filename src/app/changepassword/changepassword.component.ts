import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css'],
  providers:[AuthService],
})
export class ChangepasswordComponent implements OnInit {
newpassowrd:any
confirmpassword:any
ID:any
Passowrd:any
Token:any
constructor( private authservice: AuthService,private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    $(document).ready(function(){

      $('.pass_show').append('<span class="ptxt">Show</span>');
      });


      $(document).on('click','.pass_show .ptxt', function(){

      $(this).text($(this).text() == "Show" ? "Hide" : "Show");

      $(this).prev().attr('type', function(index, attr){return attr == 'password' ? 'text' : 'password'; });

      });

      const routeParams = this.activatedRoute.snapshot.paramMap;
      this.Token = String(routeParams.get('token'));

      this.ID = Number(routeParams.get('id'));
  }
  tologin(){
    this.router.navigateByUrl('/')
  }
  newPassowrd(password:any){
    this.newpassowrd = password.target.value;
  }
  confirmPassword(password :any){
    this.confirmpassword=password.target.value;
  }

  updatepassword(){
    console.log("abc")
    if(this.newpassowrd==this.confirmpassword)
    {
      this.authservice.up_changepass(this.newpassowrd,this.Token).subscribe((data)=>{
        alert("Password Updated");
        this.tologin();
    },(err: any)=>
    {
      alert('Password already changed ')
      this.tologin()
      console.log('err',err)
    }
    );;

    }

  }

}
