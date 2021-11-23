import { Injectable } from '@angular/core';
import { signIndata } from 'src/app/model/signIndata';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockuser: signIndata = new signIndata('canary123@gmail.com','Canary@2021');
  isAuthenticated = false;

  constructor(private router: Router) {
   
   }

   authenticate(signindata: signIndata): boolean {
     if(this.checkCredentials(signindata)){
       this.isAuthenticated = true;
       this.router.navigate(['home']);
       return true;
     }
     this.isAuthenticated = false;
     return false;
   }

    private checkCredentials(signindata: signIndata): boolean {
      return this.checkemail(signindata.getemail()) && this.checkpassword(signindata.getpassword());    
    } 
    private checkemail(email: string): boolean {
      return email === this.mockuser.getemail();
    }
    private checkpassword(password: string):boolean {
      return password === this.mockuser.getpassword();
    }

    logout(){
      this.isAuthenticated=false;
      this.router.navigate(['']);
    }

    getIsAuthenticated(): boolean {
      return this.isAuthenticated;
    }
}