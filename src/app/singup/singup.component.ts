import { Component } from '@angular/core';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent {

  singUpObj = {
    name:'',
    email:'',
    password:''
  };

  onRegister(){
    console.log(this.singUpObj.name);// this is how you can access the data now..
    // now create an empty array to store the data

    const currentUsers = localStorage.getItem('registeredUsers');

    if(currentUsers != null)
    {
      const users = JSON.parse(currentUsers);
      users.push(this.singUpObj);
      console.log(users);
  
      // and now it's time to save this data to localStorage, how ?? look at below
  
      localStorage.setItem('registeredUsers', JSON.stringify(users));
  
      // why stringify, because, data is stored in key-value format and both are strings so we need to convert it to strings first..

    }
    else{
      const users = [];
      users.push(this.singUpObj);
      localStorage.setItem('registeredUsers',JSON.stringify(users));
    }
    
    alert("User registered successfully !!");
  }
}
