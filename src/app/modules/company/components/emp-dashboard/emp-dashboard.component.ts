import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../services/dashboard/dashboard.service';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrl: './emp-dashboard.component.css'
})
export class EmpDashboardComponent implements OnInit {
  loginId: String

  ad: String
  approved: String
  totalApp :String
  constructor(private http: HttpClient,
    private dashService: DashboardService
  ) {

  }
  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/user', {
      withCredentials: true,
    }).subscribe(
      (res: any) => {
        this.loginId = res?._id
        console.log(this.loginId)

        // count all ad for company
        this.dashService.getcompanyAd(this.loginId).subscribe(
          (data) => {
            this.ad = data?.count;
            console.log(this.ad);
          }
        );

        
    //count all ad for approved
    this.dashService.getlisting(this.loginId).subscribe(
      (data) => {
        this.approved = data?.count;
        console.log(this.approved);
      }
    );
      //count all ads for applixations
      this.dashService.getapplications(this.loginId).subscribe(
        (data) => {
          this.totalApp = data?.count;
          console.log(this.totalApp);
        }
      );
      })



  }

}
