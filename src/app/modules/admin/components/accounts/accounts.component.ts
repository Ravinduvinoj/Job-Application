import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageComponent } from './message/message.component';
import { MatDialog } from '@angular/material/dialog';
import { EdituserComponent } from './edituser/edituser.component';
import { NgToastService } from 'ng-angular-popup';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SearchUserPipe } from './search-user.pipe'
import { UserRegisterComponent } from './user-register/user-register.component';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
import { Subscription } from 'rxjs';
import jsPDF from 'jspdf';
import { UsersService } from '../../../../services/users/users.service';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent implements OnInit {
  [x: string]: any;
  SearchText: any;
  tempUsers: any[] = []; // Initialize as an empty array
  userAccounts: any[];
  clickEventSubscription: Subscription;
  showTable: boolean = false;
  activTable: boolean = true;
  pdfTable: any

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private Toast: NgToastService,
    public dialog: MatDialog,
    private loadusers: UsersService

  ) { }

  ngOnInit(): void {
    this.fetchTempUsers();
    this.fetchUserAccounts();
  }
  //delete selected user
  onUserDelete(User: any): void {
    if (User.userRole == 'admin') {
      this.snackBar.open("you can't delete", 'Close', { duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'center' })
    } else {
      const dialogRef = this.dialog.open(MessageComponent);//top up dialog
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.http.get<any[]>(`http://localhost:5000/api/delete-useracc/${User.email}`).subscribe({
            next: (data) => {
              this.Toast.success({ detail: "User Deleted", summary: 'User Deleted successfully', duration: 7000, position: 'botomCenter' })
              console.log('User deleted successfully');
              this.fetchUserAccounts(); // Refresh the user list after deletion
            },
            error: (error) => {
              console.error('Error deleting user:', error);
            }
          });
        }
      });

    }

  }
  //approve tempary accounts of new registerd
  onApprove(tempUser: any): void {
    this.http.get<any[]>(`http://localhost:5000/api/approve-tempacc/${tempUser.email}`).subscribe({
      next: (data) => {
        console.log('User approved and moved to user account collection successfully');
        this.Toast.success({ detail: "Email is sent", summary: 'User approved successfully', duration: 7000, position: 'botomCenter' })
        this.fetchTempUsers(); // Refresh the user list after approval
        this.fetchUserAccounts();
      },
      error: (error) => {
        console.error('Error approving user:', error);
      }
    });
  }

  //admin direct register the company through the site
  onCompanyRegister() {
    this.dialog.open(UserRegisterComponent)
    this.fetchUserAccounts();
  }

  //on company edit
  onUserEdit(user: any) {
    if (user.userRole == 'admin') {
      this.snackBar.open("you can't edit", 'Close', { duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'center' })
    } else {
      const dialogRef = this.dialog.open(EdituserComponent, { data: user });
      console.log(user);
    }
  }

  //deleting user when approval view
  onTempDelete(tempUser: any): void {
    const dialogRef = this.dialog.open(MessageComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.http.get<any[]>(`http://localhost:5000/api/delete-tempacc/${tempUser.email}`).subscribe({
          next: (data) => {
            console.log('User deleted successfully');

            this.fetchTempUsers(); // Refresh the user list after deletion
          },
          error: (error) => {
            console.error('Error deleting user:', error);
          }
        });
      }
    });
  }

  //display colums
  displayedColumns: string[] = [
    'index',
    'company',
    'contact',
    'email',
    'address',
    'city',
    'companyurl',
    'userRole',
    'actions'
  ];

  //switching user table to temp account table
  toggleTable(): void {
    this.showTable = !this.showTable; // Toggle table visibility
    if (this.showTable) {
      this.activTable = false;
      // Fetch temp users data here if needed when the table is shown
      this.fetchTempUsers();
    } else {
      this.activTable = true;
    }
  }

  //fetching temp user accounts
  fetchTempUsers(): void {
    this.loadusers.loadtempUsers().subscribe({
      next: (data) => {
        this.tempUsers = data;
      },
      error: (error) => {
        console.error('Error fetching temp users:', error);
      }
    });
  }

  //fetching all users approved
  public fetchUserAccounts(): void {
  
    this.loadusers.loadallusers().subscribe(
      (data) => {
        this.SearchText
        this.userAccounts = data;
      },
      (error) => {
        console.error('Error fetching user accounts:', error);
      }
    );
  }
  //export pdf
  public openPDF(): void {
    let DATA: any = document.getElementById('pdfTable');

    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;

      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);

      PDF.save('users.pdf');
    });
  }

  // export file
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
