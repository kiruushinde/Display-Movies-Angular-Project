// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = false;

  constructor() {}

  login(): void {
    // Implement login logic
    this.isAuthenticated = true;
  }

  logout(): void {
    // Implement logout logic
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
