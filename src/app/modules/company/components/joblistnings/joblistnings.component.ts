import { Component, OnInit } from '@angular/core';
// import { Emitter } from '../../../../emitter/emitter';
import { PostProfileServiceService } from '../../../../services/post-profile/post-profile-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgToastService } from 'ng-angular-popup';
import { MatDialog } from '@angular/material/dialog';
import { ListningsService } from '../../../../services/listnings/listnings.service';

@Component({
  selector: 'app-joblistnings',
  templateUrl: './joblistnings.component.html',
  styleUrl: './joblistnings.component.css'
})
export class JoblistningsComponent implements OnInit {
  onAddEdit(_t14: any) {

  }


  onShow: boolean = true;
  posts: any[];
  authenticated: boolean;
  loginID: string;
  constructor(
    private jobapp: ListningsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private Toast: NgToastService,

  ) {

  }

  ngOnInit(): void {


    // Emitter.authEmitter.subscribe((auth: boolean) => {
    //   this.authenticated = auth;
    // })
    this.updatetbl();

  }
  updatetbl(): void {

    this.http.get('http://localhost:5000/api/user', {
      withCredentials: true,
    }).subscribe(
      (res: any) => {
        this.loginID = res._id
        console.log('login Id is ' + this.loginID)
        if (this.loginID == undefined) {
          console.log('no any value')
        }
        else {
          const apiUrl = `http://localhost:5000/api/add-display/${this.loginID}`; // Update the API URL as per your backend route

          this.http.get<any[]>(apiUrl).subscribe(
            (data) => {
              //this.SearchText
              this.posts = data;
              if (!this.posts) {
                console.log("no data")
              }
              console.log("not empty")

            },
            (error) => {
              console.error('Error fetching advertiesment:', error);
            }
          );
        }

      })
    // this.fetchposts(this.loginID);
  }

  onShowMore(postdata: any) {
    this.jobapp.setJobData(postdata)
    this.router.navigate(['/company/joblistnings/view-listning']);
  }

  isViewListningsRoute(): boolean {
    return this.router.url === '/company/joblistnings/view-listning';
  }
}
