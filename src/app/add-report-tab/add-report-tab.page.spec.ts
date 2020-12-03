import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddReportTabPage } from './add-report-tab.page';

describe('AddReportTabPage', () => {
  let component: AddReportTabPage;
  let fixture: ComponentFixture<AddReportTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReportTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddReportTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
