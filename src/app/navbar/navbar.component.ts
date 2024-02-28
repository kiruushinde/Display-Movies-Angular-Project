import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FetchlogindataService } from '../services/fetchlogindata.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  email: string = '';

  constructor(
    private auth: AuthService,
    private loginDat: FetchlogindataService
  ) {
    this.getData();
  }
  logoutUser() {
    console.log('user has logged out');
    this.auth.logout();
  }

  getData() {
    console.log('now current user is : ', this.loginDat.currentUser[0]);
    this.email = this.loginDat.currentUser[0].email;
  }
}
