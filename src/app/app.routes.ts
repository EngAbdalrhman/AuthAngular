import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/main-pages/main-pages.component').then(
        (m) => m.MainPagesComponent
      ),
    children: [
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/main-pages/about/about.component').then(
            (m) => m.AboutComponent
          ),
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/main-pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'error',
    loadComponent: () =>
      import('./pages/error/error.component').then((m) => m.ErrorComponent),
  },
  {
    path: '**',
    redirectTo: 'error',
  },
];
