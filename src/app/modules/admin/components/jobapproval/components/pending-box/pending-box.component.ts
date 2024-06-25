import { Component, OnInit } from '@angular/core';
import { PendingPostService } from '../../../../../../services/pending-post/pending-post.service';
import { HttpClient } from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-pending-box',
  templateUrl: './pending-box.component.html',
  styleUrl: './pending-box.component.css'
})
export class PendingBoxComponent implements OnInit {

  posts: any[];

  constructor(private getpend:PendingPostService,
    private http:HttpClient,
    private Toast:NgToastService

   ){

  }


  ngOnInit(): void {

    this.fetch_Ad()
  }
 
fetch_Ad():void {
    // getting addvertiesment data form pending service
    this.getpend.getjobpost().subscribe(
      (data) => {
        this.posts = data?.data;
        console.log(this.posts);
      }
    );
}
postapprove(data:any){
console.log(data._id)
this.http.get<any[]>(`http://localhost:5000/api/temp/approve/${data?._id}`).subscribe({
      next: (data) => {
        console.log('ad approved and moved to advertiesment collection successfully');
        this.Toast.success({ detail: "advertiesment has been posted", summary: 'advertiesment approved successfully', duration: 7000, position: 'botomCenter' })
        this.fetch_Ad()
      },
      error: (error) => {
        console.error('Error approving ad:', error);
      }
    });
}

  onShowMore(data:any){

  }


  
   

}
