import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSignUp } from '../../interfaces/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackbarServiceService } from 'src/app/shared/snackbar/snackbar-service.service';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { config } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;
  passwordHidden: Boolean = true;
  confirmPasswordHidden: Boolean = true;
  signedIn: Boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private snackbar: SnackbarServiceService
  ) {}
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  register() {
    this.signedIn = true;
    const config: MatSnackBarConfig = {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    };
    if (this.registerForm.valid) {
      this.snackbar.open('User registered successfully', 'Close', 2000, config);
      setTimeout(() => {
        this.router.navigate(['/portal']);
        this.signedIn = false;
        this.registerForm.reset();
      }, 2500);
    }
  }

  togglePasswordVisibility(field: string) {
    if (field === 'password') {
      this.passwordHidden = !this.passwordHidden;
    } else if (field === 'confirmPassword') {
      this.confirmPasswordHidden = !this.confirmPasswordHidden;
    }
  }
}
