import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgToastService } from 'ng-angular-popup';
import { Emitter } from '../../../../emitter/emitter';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent implements OnInit{
  authenticated: boolean;
  loginID: '';

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private Toast: NgToastService,
    public dialog: MatDialog,
    
  ) {
    
   
   
  }
  ngOnInit(): void {
    
    this.fetchSchedules();
  }


schedules: any[] = [];
displayedColumns: string[] = [
  'index',
  'advertiesment',
  'applicant',
  'email',
  'location',
  'interviewDate',
  'interviewTime',
  'description'
];
 

  
  
fetchSchedules(): void {
  this.http.get('http://localhost:5000/api/user', {
    withCredentials: true,
  }).subscribe(
    (res: any) => {
      this.loginID = res._id;
      console.log('Login ID is ' + this.loginID);
      if (!this.loginID) {
        console.log('No value for login ID');
      } else {
        const apiUrl = `http://localhost:5000/api/get/schedule/${this.loginID}`;
        this.http.get<{ schedules: any[] }>(apiUrl).subscribe(
          (data) => {
            this.schedules = data.schedules;
            console.log(data);
          },
          (error) => {
            console.error('Error fetching schedules:', error);
          }
        );
      }
    },
    (error) => {
      console.error('Error fetching user info:', error);
    }
  );
}
}


