import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../authentication/services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(): boolean {
    // Check if the user is authenticated
    const isAuthenticated = this.authService.isAuthenticated();

    if (!isAuthenticated) {
      // Redirect to the login page if not authenticated
      this.router.navigate(['/login']);
    }

    return isAuthenticated;
  }
}
