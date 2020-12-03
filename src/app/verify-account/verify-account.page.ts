import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.page.html',
  styleUrls: ['./verify-account.page.scss'],
})
export class VerifyAccountPage implements OnInit {

  OTP: any =  {
    first: '',
    second: '',
    third: '',
    forth: '',
    fifth: '',
    sixth: ''
  };


  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  otpController(event, next, prev) {
    if(event.target.value.length < 1 && prev){
      prev.setFocus()
    }
    else if(next && event.target.value.length>0){
      next.setFocus();
    }
    else {
     return 0;
    } 
 }

 signin(){
  this.router.navigateByUrl('/tabs');
 }

}
