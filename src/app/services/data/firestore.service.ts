import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { time } from 'console';
import 'firebase/firestore';
import { Observable } from 'rxjs';
import { Report } from '../../models/report.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: AngularFirestore) { }
  isLoading: any;
  addReport(
    name: string,
    age: number,
    address: string,
    gender: string,
  ): Promise<void> {
    let id = this.firestore.createId();

    return this.firestore.doc(`reportList/${id}`).set({
      id,
      name,
      age,
      address,
      gender,
    });
  }

  getReportList(): Observable<Report[]> {
    return this.firestore.collection<Report>(`reportList`).valueChanges();
  }

  getReportDetail(reportId: string): Observable<Report> {
    return this.firestore.collection('reportList').doc<Report>(reportId).valueChanges();
  }

  deleteReport(reportId: string): Promise<void> {
    return this.firestore.doc(`reportList/${reportId}`).delete();
  }

  editReport(reportId: string, report: Report): Promise<void> {
    return this.firestore.doc(`reportList/${reportId}`).update(report);
  }
}
