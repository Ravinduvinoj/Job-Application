import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  title = 'Dashboard';
  companycount: any
  adcount: any
  appcount: any
  seekers: any

  constructor(private dashService: DashboardService) {}
  ngOnInit(): void {
    //count all companies
    this.dashService.getAllCompanies().subscribe(
      (data) => {
        this.companycount = data;
        console.log(this.companycount);
      }
    );
    //count all ad
    this.dashService.getallAd().subscribe(
      (data) => {
        this.adcount = data;
        console.log(this.adcount);
      }
    );
    //count all applications
    this.dashService.getAllApp().subscribe(
      (data) => {
        this.appcount = data;
        console.log(this.appcount);
      }
    );
    //count all jobseekers
    this.dashService.getAllSeekers().subscribe(
      (data) => {
        this.seekers = data;
        console.log(this.seekers);
      }
    );

  }


}
