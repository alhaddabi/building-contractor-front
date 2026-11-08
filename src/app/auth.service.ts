import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthResponse, LoginPayload, RegisterPayload, UserProfile } from './models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/api/auth';
  private readonly storageKey = 'student-portal-user';
  private readonly currentUserSignal = signal<UserProfile | null>(this.readStoredUser());

  readonly currentUser = this.currentUserSignal.asReadonly();

  register(payload: RegisterPayload): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, payload);
  }

  login(payload: LoginPayload): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, payload).pipe(
      tap((response) => this.saveUser(response.user)),
    );
  }

  logout(): void {
    sessionStorage.removeItem(this.storageKey);
    this.currentUserSignal.set(null);
  }

  isLoggedIn(): boolean {
    return this.currentUserSignal() !== null;
  }

  private saveUser(user: UserProfile): void {
    sessionStorage.setItem(this.storageKey, JSON.stringify(user));
    this.currentUserSignal.set(user);
  }

  private readStoredUser(): UserProfile | null {
    const raw = sessionStorage.getItem(this.storageKey);
    if (!raw) {
      return null;
    }
    try {
      return JSON.parse(raw) as UserProfile;
    } catch {
      return null;
    }
  }
}
