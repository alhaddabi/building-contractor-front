import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { readApiError } from '../api-error';
import { AuthService } from '../auth.service';
import { AuthShell } from '../auth-shell/auth-shell';

function passwordsMatch(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { passwordMismatch: true };
}

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink, AuthShell],
  templateUrl: './register.html',
})
export class Register {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly formBuilder = inject(FormBuilder);

  readonly submitting = signal(false);
  readonly errorMessage = signal('');

  readonly form = this.formBuilder.nonNullable.group(
    {
      fullName: ['', [Validators.required, Validators.maxLength(80)]],
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
          Validators.pattern(/^[a-zA-Z0-9._-]+$/),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(72)]],
      confirmPassword: ['', Validators.required],
    },
    { validators: passwordsMatch },
  );

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.errorMessage.set(this.formError());
      return;
    }

    this.submitting.set(true);
    this.errorMessage.set('');
    const { confirmPassword, ...payload } = this.form.getRawValue();
    void confirmPassword;

    this.auth.register(payload).subscribe({
      next: () => {
        void this.router.navigate(['/login'], { queryParams: { registered: '1' } });
      },
      error: (error: HttpErrorResponse) => {
        this.submitting.set(false);
        this.errorMessage.set(readApiError(error));
      },
    });
  }

  private formError(): string {
    if (this.form.hasError('passwordMismatch')) {
      return 'The two passwords do not match.';
    }
    const username = this.form.controls.username;
    if (username.hasError('pattern') || username.hasError('minlength')) {
      return 'Username must be 3 to 30 characters: letters, numbers, dots, underscores, or hyphens.';
    }
    if (this.form.controls.email.hasError('email')) {
      return 'Enter a valid email address.';
    }
    if (this.form.controls.password.hasError('minlength')) {
      return 'Password must be at least 6 characters.';
    }
    return 'Please fill in every field.';
  }
}
