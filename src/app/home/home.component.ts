import { Component, OnInit } from '@angular/core';
import {LoginComponent} from 'src/app/login/login.component'
import {StateService} from 'src/app/services/state.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[StateService]
})
export class HomeComponent implements OnInit {

  constructor(  private stateservice: StateService) { }

  ngOnInit(): void {
    this.alert();
    
  }
  alert(){
    const data= this.stateservice.name;
    console.log(data);
    alert(`welcome ${data}`);
  }
  
  
  

}
