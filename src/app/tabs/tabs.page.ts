import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  constructor() {}

  ngOnInit() {
  }
  
  report = 'assets/icon/documents.svg';
  reportOutline = 'assets/icon/documents-outline.svg';
  addCircle = 'assets/icon/add-circle.svg';
  addCircleOutline = 'assets/icon/add-circle-outline.svg';
  person = 'assets/icon/person.svg';
  personOutline = 'assets/icon/person-outline.svg';

  isReportSelected = false;
  isAddCircleSelected = false;
  isAccountSelected = false;

  changeReportIcon(): void {    
    this.resetAll();
    this.isReportSelected = true;
  }

  changeAddCircleIcon(): void {
   this.resetAll();
   this.isAddCircleSelected = true;
  }

  changeAccountIcon(): void {
    this.resetAll();
    this.isAccountSelected = true;
  }

  resetAll(){
    this.isReportSelected = false;
    this.isAddCircleSelected= false;
    this.isAccountSelected= false;
  }

}
