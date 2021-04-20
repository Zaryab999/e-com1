import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { BehaviorSubject } from 'rxjs';
//import {LoginComponent} from 'src/app/login/login.component'
@Injectable({
  providedIn: 'root'
})
export class StateService {

  subject = new BehaviorSubject('abc');
  constructor( ) {  
    
  }
  
  /*
  email:any ="";
  public name:any ="";
  setdata(name:any,email:any){
      this.name=name;
      this.email=email;
      //console.log(this.name)
  }
  getdata(){
  console.log(this.name)
  return this.name;
  }
*/
}
