import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface AuthForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  authForm!: FormGroup<AuthForm>;

  get form() {
    return this.authForm.controls;
  }

  constructor() {
    this.authForm = new FormGroup<AuthForm>({
      email: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
      password: new FormControl<string>('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
    });
  }
}
