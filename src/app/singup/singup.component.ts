import { Component } from '@angular/core';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css',
})
export class SingupComponent {
  // create sing up object to store newly registed users
  singUpObj = {
    name: '',
    email: '',
    password: '',
  };

  onRegister() {
    // this is how you can access the data now..
    console.log(this.singUpObj.name);

    const currentUsers = localStorage.getItem('registeredUsers');

    if (currentUsers != null) {
      const users = JSON.parse(currentUsers);
      users.push(this.singUpObj);
      console.log(users);

      localStorage.setItem('registeredUsers', JSON.stringify(users));

      // why stringify, because, data is stored in key-value format and both are strings so we need to convert it to strings first..
    } else {
      const users = [];
      users.push(this.singUpObj);
      localStorage.setItem('registeredUsers', JSON.stringify(users));
    }

    alert('User registered successfully !!');
  }
}
