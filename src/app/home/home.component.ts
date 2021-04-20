import { Component, OnInit } from '@angular/core';
import {LoginComponent} from 'src/app/login/login.component'
import {StateService} from 'src/app/services/state.service'
import {AuthService} from 'src/app/services/auth.service'
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[AuthService]
})
export class HomeComponent implements OnInit {

  constructor(  private authservice: AuthService) { }

  ngOnInit(): void {
     
  }
  alert(){
    //  const data= this.authservice.name;
    //  console.log(data);

   
    
    
    
  }

  //this.authservice.subject.getValue();

      //console.log(res);
      // this.customerId = data.ID;
      // console.log(this.customerId);
      
    
    //console.log(this.name)
    
      
    
  
  
  
  

}
