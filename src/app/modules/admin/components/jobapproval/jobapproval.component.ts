
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobapprovalService } from '../../../../services/jobapprove/jobapproval.service';

@Component({
  selector: 'app-jobapproval',
  templateUrl: './jobapproval.component.html',
  styleUrl: './jobapproval.component.css'
})
export class JobapprovalComponent implements OnInit {
  posts: any[];
  onShow: boolean = true;

  constructor(
    private jobAp: JobapprovalService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    // getting addvertiesment data form approval service
    this.jobAp.getjobpost().subscribe(
      (data) => {
        this.posts = data.data;
        console.log(this.posts);
      }
    );
  }

  onAddEdit(_t16: any) {

  }
  //send data to jobapproval to selected row data
  onShowMore(post: any): void {
    this.jobAp.setJobData(post);
    this.router.navigate(['/admin/jobapproval/post-profile']); // navigating to profile
  }
  isPostProfileRoute(): boolean {
    return this.router.url === '/admin/jobapproval/post-profile';  // checking already stay in this route
  }
  view_pending():void{
    this.router.navigate(['/admin/jobapproval/pending']);// navigating to pending route
  }
  ispendingRoute(): boolean {
    return this.router.url === '/admin/jobapproval/pending';  // checking already stay in this route
  }
}
