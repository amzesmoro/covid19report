import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportDetailPage } from './report-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ReportDetailPage
  },
  {
    path: 'edit-report',
    loadChildren: () => import('./edit-report/edit-report.module').then( m => m.EditReportPageModule)
  },
  {
    path: 'edit-report/:id',
    loadChildren: () => import('./edit-report/edit-report.module').then( m => m.EditReportPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportDetailPageRoutingModule {}
