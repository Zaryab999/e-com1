/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 // userName = "";
 //onLogin(user: string) {
 //this.userName =user;
 ///alert(this.userName)

}
*/
import { Component, Input ,Output,EventEmitter,OnInit} from '@angular/core';
import { BehaviorSubject ,Subject} from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[AuthService]
})
export class HeaderComponent implements OnInit {
  constructor(public _authservice:AuthService){}

  //currentMessage$.subscribe(val =>console.log("early sub:"+val))

  ngOnInit(){
    //console.log("in ng init header"+this.childMessage)
      //this.change()


  }

  @Input() childMessage: string='';
  message:any



  // public messageSource = new BehaviorSubject<string>("abc");

  // constructor() {
  //   console.log(this.childMessage)
  //   this.messageSource.next(this.childMessage)

  //   console.log(this.messageSource.getValue)
  // }

  //  // @Output() messageEvent = new EventEmitter<string>();
  //   // sendmessage(){
  //   // this.messageEvent.emit(this.childMessage)
  //   // }



  // //public currentMessage = this.messageSource.getValue();
  //   change(){
  //      const subject =new Subject();
  //      const currentMessage$ = subject.asObservable();

  //      currentMessage$.subscribe( res=>

  //       this.message=res);

  //     subject.next(this.childMessage)


  //     subject.complete()
  //     console.log ("message:"+this.message)

  //   }


}
