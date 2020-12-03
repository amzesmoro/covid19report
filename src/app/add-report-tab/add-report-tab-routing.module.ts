import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddReportTabPage } from './add-report-tab.page';

const routes: Routes = [
  {
    path: '',
    component: AddReportTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddReportTabPageRoutingModule {}
