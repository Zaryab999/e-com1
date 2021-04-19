import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }
  email:any ="";
 public name:any ="";
  setdata(name:any,email:any){
      this.name=name;
      this.email=email;
      console.log(this.name)
  }
  getdata(){
    console.log(this.name)
    return this.name;
  }

}
