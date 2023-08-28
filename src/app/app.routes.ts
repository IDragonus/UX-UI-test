import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/auth/auth.routes').then((route) => route.authRoutes),
  },
  {
    path: 'index',
    loadChildren: () =>
      import('./components/pages/pages.routes').then(
        (route) => route.pagesRoutes
      ),
  },
];
