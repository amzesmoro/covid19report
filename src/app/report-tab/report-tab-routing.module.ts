import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportTabPage } from './report-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ReportTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportTabPageRoutingModule {}
