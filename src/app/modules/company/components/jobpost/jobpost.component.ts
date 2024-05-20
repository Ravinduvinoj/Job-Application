import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddPostComponent } from './components/add-post/add-post.component';
import { Emitter } from '../../../../emitter/emitter';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProfileServiceService } from '../../../../services/post-profile/post-profile-service.service';



@Component({
  selector: 'app-jobpost',
  templateUrl: './jobpost.component.html',
  styleUrl: './jobpost.component.css'
})
export class JobpostComponent implements OnInit {
  onShow: boolean = true;
  posts : any[];
  authenticated: boolean;
  loginID: string;
  constructor(
    private post_prof:PostProfileServiceService,
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private Toast: NgToastService,
    public dialog: MatDialog
  ) {

  }
  ngOnInit(): void {
    Emitter.authEmitter.subscribe((auth: boolean) => {
      this.authenticated = auth;
    })
    

    this.http.get('http://localhost:5000/api/user', {
      withCredentials: true,
    }).subscribe(
      (res: any) => {
        this.loginID=res._id
        console.log('login Id is '+this.loginID)
        if (this.loginID== undefined){
          console.log('no any value')
        }
        else{
        const apiUrl = `http://localhost:5000/api/add-display/${this.loginID}`; // Update the API URL as per your backend route
    
        this.http.get<any[]>(apiUrl).subscribe(
          (data) => {
            //this.SearchText
            this.posts = data;
    
          },
          (error) => {
            console.error('Error fetching main category:', error);
          }
        );
      }

      })
    // this.fetchposts(this.loginID);
  }

  onShowMore(post: any): void {
    this.post_prof.setJobData(post);
   this.router.navigate(['/company/jobpost/post-profile']);
  }

  isPostProfileRoute(): boolean {
    return this.router.url === '/company/jobpost/post-profile';
  }
  
//  onPath(path:any):void {
//   const apiUrl = 'http://localhost:5000/api/upload'; // Update the API URL as per your backend route

//   this.http.get<any[]>(apiUrl).subscribe(
//     (data) => {
//       //this.SearchText
//       this.mainCategory = data;

//     },
//     (error) => {
//       console.error('Error fetching job category:', error);
//     }
//   );
// }
//  }


onAddEdit(data:any){

}

  createJob(): void {
   this.dialog.open(AddPostComponent)
  }
}









