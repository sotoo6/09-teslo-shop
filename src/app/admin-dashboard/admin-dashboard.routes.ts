import { Routes } from '@angular/router';
import { AdminDashboardLayoutTs } from './layouts/admin-dashboard-layout.ts/admin-dashboard-layout.ts';
import { ProductAdminPage } from './pages/product-admin-page/product-admin-page.js';
import { ProductsAdminPage } from './pages/products-admin-page/products-admin-page.js';
import { IsAdminGuard } from '@auth/guards/is-admin.guard.js';

export const adminDashboardRoutes: Routes = [
  {
    path: '',
    component: AdminDashboardLayoutTs,
    canMatch: [IsAdminGuard],
    children: [
      {
        path: 'products',
        component: ProductsAdminPage
      },
      {
        path: 'products/:id',
        component: ProductAdminPage
      },
      {
        path: '**',
        redirectTo: 'products'
      }
    ]
  }
]

export default adminDashboardRoutes;
