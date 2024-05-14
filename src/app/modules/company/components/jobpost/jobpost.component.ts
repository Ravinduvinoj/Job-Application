import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddPostComponent } from './components/add-post/add-post.component';
import { Emitter } from '../../../../emitter/emitter';


@Component({
  selector: 'app-jobpost',
  templateUrl: './jobpost.component.html',
  styleUrl: './jobpost.component.css'
})
export class JobpostComponent implements OnInit {

  posts : any[];
  authenticated: boolean;
  loginID: string;
  constructor(
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
  
 


onAddEdit(data:any){

}

  createJob(): void {
   this.dialog.open(AddPostComponent)
  }
}









