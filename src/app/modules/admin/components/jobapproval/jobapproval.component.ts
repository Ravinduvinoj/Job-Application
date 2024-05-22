import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { JobapprovalService } from '../../../../services/jobapprove/jobapproval.service';
import { data } from 'jquery';

@Component({
  selector: 'app-jobapproval',
  templateUrl: './jobapproval.component.html',
  styleUrl: './jobapproval.component.css'
})
export class JobapprovalComponent implements OnInit {
  posts: any[];
  onShow: boolean = true;

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private Toast: NgToastService,
    private jobAp:JobapprovalService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    const apiUrl = "http://localhost:5000/api/displayPost" // Update the API URL as per your backend route

  //   this.http.get<any[]>(apiUrl).subscribe(
  //     (data) => {
  //       //this.SearchText
  //       this.posts = data.;
  //       console.log(this.posts);
  //     },
  //     (error) => {
  //       console.error('Error fetching main category:', error);
  //     }
  //   );

    this.jobAp.getjobpost().subscribe(
        (data)=>{
          this.posts=data.data;
          console.log(this.posts);
        }
    );
   }

  onAddEdit(_t16: any) {

  }
  onShowMore(post: any): void {
     this.jobAp.setJobData(post);
    this.router.navigate(['/admin/jobapproval/pending-posts']);
  }
  isPostProfileRoute(): boolean {
    return this.router.url === '/admin/jobapproval/pending-posts';
  }


}
