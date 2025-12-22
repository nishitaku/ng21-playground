import { Routes } from '@angular/router';
import { ClickEventPage } from './pages/click-event-page/click-event-page';
import { LoginPage } from './pages/login-page/login-page';
import { SignalFormsArrayPage } from './pages/signal-forms-array-page/signal-forms-array-page';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'click-event',
  },
  {
    path: 'click-event',
    component: ClickEventPage,
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
