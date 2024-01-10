import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private validEmails = ['user1@example.com', 'user2@example.com'];

  constructor() {}

  login(email: string, password: string): Observable<boolean> {
    const isValidEmail = this.validEmails.includes(email.toLowerCase());

    if (isValidEmail) {
      localStorage.setItem('authenticated', 'true');
    }

    return of(isValidEmail);
  }

  logout(): void {
    localStorage.removeItem('authenticated');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authenticated');
  }
}
