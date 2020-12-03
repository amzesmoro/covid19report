import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/data/firestore.service';

@Component({
  selector: 'app-edit-report',
  templateUrl: './edit-report.page.html',
  styleUrls: ['./edit-report.page.scss'],
})
export class EditReportPage implements OnInit {

  public editReportForm: FormGroup;
  id: any;

  constructor(
    private firestoreService: FirestoreService,
    formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.editReportForm = formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
    });
   }

  ngOnInit() {
    
  }

  editReport(){

  }

}
