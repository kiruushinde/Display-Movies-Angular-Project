import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj = {
    email: '',
    password: '',
  };

  constructor(private router: Router) {}
  allusers: any = localStorage.getItem('registeredUsers');

  onSignIn() {
    // save logged in users to local storage
    const loggedInUsers = [];
    loggedInUsers.push(this.loginObj);
    localStorage.setItem('logInUsers', JSON.stringify(loggedInUsers));

    // check whether this user is found or not in local storage
    const isLoggedIn = this.loginUser(
      this.loginObj.email,
      this.loginObj.password
    );

    if (isLoggedIn) {
      console.log('user is logged in ');
      this.router.navigateByUrl('/home');
    } else {
      console.log('not logged in');
      alert('Please Enter valid credentials..');
    }
  }

  // function to find the current is logged in or not / whether he have an account or not
  loginUser(email: string, password: string): boolean {
    const user = JSON.parse(this.allusers);

    const Isuser = user.find(
      (u: any) => u.email === email && u.password === password
    );
    return !!Isuser; // Returns true if user is found, false otherwise
  }
}
