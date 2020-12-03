import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { FirestoreService } from '../services/data/firestore.service';

@Component({
  selector: 'app-add-report-tab',
  templateUrl: 'add-report-tab.page.html',
  styleUrls: ['add-report-tab.page.scss'],
})
export class AddReportTabPage {

  public addReportForm: FormGroup;
 
  constructor(
    public loadingController: LoadingController,
    // public alertController: AlertController,
    private firestoreService: FirestoreService,
    formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.addReportForm = formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  async addReport() {
    let loading = await this.loadingController.create();

    let name = this.addReportForm.value.name;
    let age = this.addReportForm.value.age;
    let address = this.addReportForm.value.address;
    let gender = this.addReportForm.value.gender;

    this.firestoreService
    .addReport(name, age, address, gender)
    .then(
      () => {
        loading.dismiss().then(() => {
          this.router.navigateByUrl('');
          console.log('Sucess Adding Report');
        });
      },
      error => {
        loading.dismiss().then(() => {
          console.log(error);
        });
      }
    );
  
    return await loading.present();
  }
}
