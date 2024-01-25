import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  passwordHidden = true;

  constructor(private router: Router, private _formBuilder: FormBuilder) {}

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
    if (this.loginForm.invalid) {
      return;
    }
    this.router.navigate(['/portal']);
    this.loginForm.reset();
  }

  get f() {
    return this.loginForm.controls;
  }

  togglePasswordVisibility() {
    this.passwordHidden = !this.passwordHidden;
  }
}
