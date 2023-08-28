import { Route } from '@angular/router';

export const pagesRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./index/index.component').then((c) => c.IndexComponent),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./home/home.component').then((c) => c.HomeComponent),
      },
      {
        path: 'restaurants',
        loadComponent: () =>
          import('./restaurants/restaurants.component').then(
            (c) => c.RestaurantsComponent
          ),
      },
      {
        path: 'drinks',
        loadComponent: () =>
          import('./drinks/drinks.component').then((c) => c.DrinksComponent),
      },
      {
        path: 'menu',
        loadComponent: () =>
          import('./menu/menu.component').then((c) => c.MenuComponent),
      },
      {
        path: 'reserve',
        loadComponent: () =>
          import('./reserve/reserve.component').then((c) => c.ReserveComponent),
      },
      {
        path: 'delivery',
        loadComponent: () =>
          import('./delivery/delivery.component').then(
            (c) => c.DeliveryComponent
          ),
      },
      {
        path: 'club',
        loadComponent: () =>
          import('./club/club.component').then((c) => c.ClubComponent),
      },
    ],
  },
];
