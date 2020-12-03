import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-account-tab',
  templateUrl: 'account-tab.page.html',
  styleUrls: ['account-tab.page.scss'],
})
export class AccountTabPage {

  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  signOut() {
    this.alertController.create({
      header: 'Sign Out',
      message: 'Are you sure? Signing Out will remove all data from this device.',
      buttons: [{ 
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Ok',
        handler: () => {          
          this.router.navigate(['/home']); 
        }
      }]
    }).then(alertElement => {
      alertElement.present();
    });
  }
}
