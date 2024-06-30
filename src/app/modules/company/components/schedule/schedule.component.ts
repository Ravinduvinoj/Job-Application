import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgToastService } from 'ng-angular-popup';
import * as XLSX from 'xlsx';
import { UsersService } from '../../../../services/users/users.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent implements OnInit {
  authenticated: boolean;
  loginID: '';
  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private Toast: NgToastService,
    public dialog: MatDialog,
    private currentUser: UsersService
  ) { }
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

  //get interview schedule for current company
  fetchSchedules(): void {
    //get current user
    this.currentUser.loadcurrentuser().subscribe(
      (res: any) => {
        this.loginID = res._id;
        console.log('Login ID is ' + this.loginID);
        if (!this.loginID) {
          console.log('No value for login ID');
        } else {
          //get schedule using current user id
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

  filename = 'ExcelSheet.xlsx';
  exportExcel() {
    const data = document.getElementById('table-data');
    if (data) {
      const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(data);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      XLSX.writeFile(wb, this.filename);
    } else {
      console.error('Element with ID "table-data" not found.');
    }
  }
}


