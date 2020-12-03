import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Report } from '../models/report.interface';
import { FirestoreService } from '../services/data/firestore.service';

@Component({
  selector: 'app-report-tab',
  templateUrl: 'report-tab.page.html',
  styleUrls: ['report-tab.page.scss'],
})
export class ReportTabPage implements OnInit {

  isLoading: any;

  public reportList: Observable<Report[]>;
  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit(): void {  
    this.reportList = this.firestoreService.getReportList();
  }

}
