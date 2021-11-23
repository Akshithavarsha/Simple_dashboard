import { Component } from '@angular/core';
import { AuthenticationService } from './service/auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-dashboard';

  constructor( public authenticationservice : AuthenticationService){

  }
  logout(){
    this.authenticationservice.logout();
  }
}
