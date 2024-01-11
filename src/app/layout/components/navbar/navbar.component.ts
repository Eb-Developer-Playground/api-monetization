import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() userLoggedOut = false;

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/auth/login']);
  }

  signUp() {
    this.router.navigate(['/auth/signup']);
  }

  accountPage() {
    this.router.navigate(['/account']);
  }
}
