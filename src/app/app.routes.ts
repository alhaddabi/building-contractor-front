import { Routes } from '@angular/router';
import { authGuard, guestGuard } from './auth.guard';
import { ContractorDetail } from './contractor-detail/contractor-detail';
import { Home } from './home/home';
import { Login } from './login/login';
import { Register } from './register/register';
import { Shortlist } from './shortlist/shortlist';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: Login, canActivate: [guestGuard] },
  { path: 'register', component: Register, canActivate: [guestGuard] },
  { path: 'home', component: Home, canActivate: [authGuard] },
  { path: 'contractors/:id', component: ContractorDetail, canActivate: [authGuard] },
  { path: 'shortlist', component: Shortlist, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' },
];
