import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSignUp } from '../../interfaces/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;
  passwordHidden: Boolean = true;
  confirmPasswordHidden: Boolean = true;

  constructor(private router: Router, private formBuilder: FormBuilder) {}
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
    if (this.registerForm.valid) {
      this.router.navigate(['/portal']);
      this.registerForm.reset();
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
