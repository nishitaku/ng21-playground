import { Routes } from '@angular/router';
import { AriaLayout } from './layouts/aria-layout/aria-layout';
import { ClickEventPage } from './pages/click-event-page/click-event-page';
import { ListboxComponent } from './pages/listbox/listbox';
import { LoginPage } from './pages/login-page/login-page';
import { SignalFormsArrayPage } from './pages/signal-forms-array-page/signal-forms-array-page';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'aria',
  },
  {
    path: 'aria',
    component: AriaLayout,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'listbox',
      },
      {
        path: 'listbox',
        component: ListboxComponent,
      },
    ],
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
