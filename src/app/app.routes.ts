import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    // component: AuthComponent,
    loadComponent: () => import('./core/auth/test1/auth.component')
  },
];
