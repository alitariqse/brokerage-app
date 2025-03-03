import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './core-layout/pages/main-layout/main-layout.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', loadChildren: () => import('./core-features/overview/overview.module').then(m => m.OverviewModule), canActivate: [authGuard] },
      { path: 'dashboard/:accountID', loadChildren: () => import('./core-features/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [authGuard] },
      { path: 'profile', loadChildren: () => import('./core-features/profile/profile.module').then(m => m.ProfileModule), canActivate: [authGuard] },
      { path: 'orders', loadChildren: () => import('./core-features/orders/orders.module').then(m => m.OrdersModule), canActivate: [authGuard] },
      { path: 'achievements', loadChildren: () => import('./core-features/achievements/achievements.module').then(m => m.AchievementsModule), canActivate: [authGuard] },
      { path: 'affiliation', loadChildren: () => import('./core-features/affiliation/affiliation.module').then(m => m.AffiliationModule), canActivate: [authGuard] },
      { path: '**', redirectTo: 'overview' }
    ],
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'top',
      scrollOffset: [0, 0],
      anchorScrolling: 'enabled'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }