import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'report-tab',
        loadChildren: () => import('../report-tab/report-tab.module').then(m => m.ReportTabPageModule)
      },
      {
        path: 'add-report-tab',
        loadChildren: () => import('../add-report-tab/add-report-tab.module').then(m => m.AddReportTabPageModule)
      },
      {
        path: 'account-tab',
        loadChildren: () => import('../account-tab/account-tab.module').then(m => m.AccountTabPageModule)
      },  
      {
        path: '',
        redirectTo: '/tabs/report-tab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/report-tab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
