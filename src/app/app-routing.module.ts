import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'report-detail',
    loadChildren: () => import('./report-detail/report-detail.module').then( m => m.ReportDetailPageModule)
  },
  {
    path: 'report-detail/:id',
    loadChildren: () => import('./report-detail/report-detail.module').then( m => m.ReportDetailPageModule)
  },
  {
    path: 'home',    
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)    
  },
  {
    path: 'verify-account',
    loadChildren: () => import('./verify-account/verify-account.module').then( m => m.VerifyAccountPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
