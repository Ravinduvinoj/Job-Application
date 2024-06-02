import { Component, OnInit } from '@angular/core';
import { ListningsService } from '../../../../../../services/listnings/listnings.service';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { ApprovalComponent } from '../approval/approval.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-view-listnings',
  templateUrl: './view-listnings.component.html',
  styleUrl: './view-listnings.component.css'
})
export class ViewListningsComponent implements OnInit{

  posts :any;//any type for array
title: String;
constructor(private viewapp:ListningsService,
  private http: HttpClient,
  public dialog: MatDialog){}

  ngOnInit(): void {
     //load data applications for advertiesment
    this.viewapp.getjobapp().subscribe(
      (data) => {
        this.posts = data;
        console.log(this.posts);
      }
    );
    const data =this.viewapp.getPostInfo()
    this.title= data.job_title;
    
  }
  

  //download cv for local storage
  downloadCV(url: string): void {
    this.http.get(url, { responseType: 'blob' }).subscribe((blob) => {
      const fileName = url.split('/').pop();
      saveAs(blob, fileName);
    }, error => {
      console.error('Download error:', error);
    });
  }

  setapprove(application:any) {
    const dialogRef= this.dialog.open(ApprovalComponent, { data: application });
  }
}
