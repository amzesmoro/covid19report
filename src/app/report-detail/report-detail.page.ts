import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Report } from '../models/report.interface';
import { FirestoreService } from '../services/data/firestore.service';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.page.html',
  styleUrls: ['./report-detail.page.scss'],
})
export class ReportDetailPage implements OnInit {

  public report: Report;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private firestoreService: FirestoreService,
    private alertController: AlertController
  ) {
    
   }

  ngOnInit() {
    let reportId: string = this.activatedRoute.snapshot.paramMap.get('id');
    this.firestoreService.getReportDetail(reportId).subscribe(report => {
      this.report = report;
    })
  }

  async deleteReport(reportId: string, name: string): Promise<void> {
    let alert = await this.alertController.create({
      header: 'Are you sure?',
      message: `Do you really want to delete report data of <b>${name}<b>`,
      buttons: [{ 
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Delete',
        handler: () => {
          this.firestoreService.deleteReport(reportId).then(() => {
            this.router.navigateByUrl('');
          });
        }
      }]
    }); 
    await alert.present();      
  }

  editReport(reportId: string) {
    return this.router.navigateByUrl(`/edit-report/${reportId}`);
  }
}
