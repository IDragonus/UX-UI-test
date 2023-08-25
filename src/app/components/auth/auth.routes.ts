import { Route } from '@angular/router';

export const authRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('../auth/login/login.component').then((m) => m.LoginComponent),
  },
];
