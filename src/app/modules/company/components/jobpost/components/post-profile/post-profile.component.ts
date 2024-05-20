import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProfileServiceService } from '../../../../../../services/post-profile/post-profile-service.service';
import { AddDeleteComponent } from '../add-delete/add-delete.component';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgToastService } from 'ng-angular-popup';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-post-profile',
  templateUrl: './post-profile.component.html',
  styleUrl: './post-profile.component.css'
})
export class PostProfileComponent implements OnInit {

  post: any = null;

  constructor(private router: Router,
    private post_prof:PostProfileServiceService,private http: HttpClient,
    private snackBar: MatSnackBar,
    private Toast: NgToastService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.post = this.post_prof.getJobData();
    console.log(this.post);
  }

  onPostDelete(cat: any): void {

    const dialogRef = this.dialog.open(AddDeleteComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.http.get<any[]>(`http://localhost:5000/api/post/delete/${cat}`).subscribe({
          next: (data) => {
            this.Toast.success({ detail: "post Deleted", summary: 'post Deleted successfully', duration: 7000, position: 'botomCenter' })
            console.log('Post deleted successfully');
            this.router.navigate(['/company/jobpost']);
          },
          error: (error) => {
            console.error('Error deleting post:', error);
          }
        });
      }
    });

}
}
