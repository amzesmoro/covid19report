import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddReportTabPageRoutingModule } from './add-report-tab-routing.module';

import { AddReportTabPage } from './add-report-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddReportTabPageRoutingModule
  ],
  declarations: [AddReportTabPage]
})
export class AddReportTabPageModule {}
