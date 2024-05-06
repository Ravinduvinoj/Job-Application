import { Component, OnInit } from '@angular/core';
import { JobAddComponent } from './components/job-add/job-add.component';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedService } from '../../../../shared.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-jobpost',
  templateUrl: './jobpost.component.html',
  styleUrl: './jobpost.component.css'
})
export class JobpostComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private Toast: NgToastService,
    public dialog: MatDialog,
    private sharedService: SharedService,
    private SServices: SharedService,
  ) {

  }
  ngOnInit(): void {
    
  }




  createJob(): void {
    this.dialog.open(JobAddComponent)
  }
}









