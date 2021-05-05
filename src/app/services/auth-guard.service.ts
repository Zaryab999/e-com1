import { Injectable } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service'
import { Router, CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth:AuthService,private router:Router) { }
  canActivate():boolean{
    if(!this.auth.loggedin()){
      alert("You're not logged in First Log-in Plz")
      this.router.navigateByUrl('/')
      return false
    }
    return true

  }

}
