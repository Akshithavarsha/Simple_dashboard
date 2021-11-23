import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../service/auth/authentication.service';
import { signIndata } from '../model/signIndata';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isformvalid = false;
  iscredentialsinvalid = false;

  constructor(private authenticationservice : AuthenticationService) { }

  ngOnInit(): void {
  }


  onSubmit(signInform : NgForm){
    console.log(signInform.value);
    if(!signInform.valid){
      this.isformvalid = true;
      this.iscredentialsinvalid = false;
      return;
    }
    this.checkCredentials(signInform);
    
  }

  private checkCredentials(signInform: NgForm){
    const signindata = new signIndata(signInform.value.email, signInform.value.password);
    if (this.authenticationservice.authenticate(signindata)){
      this.isformvalid = false;
      this.iscredentialsinvalid = true;
      return;
    }

  }

}
