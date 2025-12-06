import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  displayName: string | null = null;

  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    return !!this.displayName;
  }

  login(username: string, password: string) {
    // TODO: hook to backend later
    this.displayName = username;
    this.router.navigate(['/']);
  }

  register(username: string, password: string, email: string, displayName: string) {
    // TODO: hook to backend later
    this.displayName = displayName;
    this.router.navigate(['/']);
  }

  logout() {
    this.displayName = null;
    this.router.navigate(['/login']);
  }
}
