import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  next() {
    this.slides.slideNext();
  }
  
  signin() {
    this.router.navigateByUrl('/sign-in');
  }

  signup() {
    this.router.navigateByUrl('/sign-up');
  }
}
