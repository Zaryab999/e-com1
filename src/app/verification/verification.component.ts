import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from 'src/app/services/auth.service'
@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css'],
  providers:[AuthService]
})
export class VerificationComponent implements OnInit
{

  product:any;

  ToLogin()
  {
    this.router.navigateByUrl('/')
  }

  constructor(private authserice:AuthService,private router:Router, private activatedRoute:ActivatedRoute)
  {
   // console.log(this.router.getCurrentNavigation().extras.state);
  }
  vtoken:string=""
  ID:number=0
  ngOnInit(): void
  {

    const routeParams = this.activatedRoute.snapshot.paramMap;
    const token = String(routeParams.get('token'));
    const id = Number(routeParams.get('id'));
    // console.log(history.state)
    console.log(token)
    this.vtoken=token;
    this.ID=id
    console.log(id)
    this.authserice.verify(this.vtoken,this.ID).subscribe(async (res: any) => {
    this.authserice.up_ver_st(id);
    alert(`USer ${res.Name} verified\n You can login Now`);
    this.ToLogin();
    },
    (err: any)=>
    {
      alert('Failed to verify')
      console.log('err',err)
    });


    // this.product=history.state;
  }

  /*
  verifycode(){
    const usercode=this.authserice.getcode();
    if (usercode == this.code)
    {
      console.log("verified")
    }
    else{
      console.log("verification failed")
    }

  }


*/

}
