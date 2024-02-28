import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchlogindataService {
  currentUser: any = [];
  constructor() {}

  loggedInUser: any = localStorage.getItem('logInUsers');
}
