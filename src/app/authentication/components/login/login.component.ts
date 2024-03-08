import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackbarServiceService } from 'src/app/shared/snackbar/snackbar-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  passwordHidden = true;
  horizontalPosition = 'end';
  verticalPosition = 'top';
  loggingIn: Boolean = false;

  constructor(
    private router: Router,
    private _formBuilder: FormBuilder,
    private snackbarService: SnackbarServiceService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this._formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  attemptLogin() {
    this.submitted = true;
    this.loggingIn = true;
    if (this.loginForm.invalid) {
      return;
    }
    const config: MatSnackBarConfig = {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    };
    this.snackbarService.open('Logged in successfully', 'Close', 2000, config);
    setTimeout(() => {
      this.router.navigate(['/portal']);
      this.loggingIn = false;
      this.loginForm.reset();
    }, 2500);
  }

  get f() {
    return this.loginForm.controls;
  }

  togglePasswordVisibility() {
    this.passwordHidden = !this.passwordHidden;
  }
}
