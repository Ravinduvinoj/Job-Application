import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { JobapprovalService } from '../../../../../../services/jobapprove/jobapproval.service';
import { RemoveApprovalComponent } from '../remove-approval/remove-approval.component';

@Component({
  selector: 'app-approval-profile',
  templateUrl: './approval-profile.component.html',
  styleUrl: './approval-profile.component.css'
})
export class ApprovalProfileComponent implements OnInit{

  post: any = null;

  constructor(private router: Router,
    // private post_prof:ApprovalProfileComponent,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private Toast: NgToastService,
    public dialog: MatDialog,
    private jobapp: JobapprovalService,
  ) {}
  ngOnInit(): void {
    this.post = this.jobapp.getJobData();
    console.log(this.post);
  

  }
  onPostDelete(cat: any): void {

    const dialogRef = this.dialog.open(RemoveApprovalComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.http.get<any[]>(`http://localhost:5000/api/post/delete/${cat}`).subscribe({
          next: (data) => {
            this.Toast.success({ detail: "post Deleted", summary: 'post Deleted successfully', duration: 7000, position: 'botomCenter' })
            console.log('Post deleted successfully');
            setTimeout(() => {
              window.location.href ='/admin/jobapproval';
           
            }, 1000);
          },
          error: (error) => {
            console.error('Error deleting post:', error);
          }
        });
      }
    });

}


}
