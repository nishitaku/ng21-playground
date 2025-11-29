import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { SignalFormsArrayPage } from './pages/signal-forms-array-page/signal-forms-array-page';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'signal-forms-array',
    component: SignalFormsArrayPage,
  },
];
