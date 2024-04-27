import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageComponent } from './message/message.component';
import { MatDialog } from '@angular/material/dialog';
import { EdituserComponent } from './edituser/edituser.component';




@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent implements OnInit {
[x: string]: any;

  userAccounts: any[];

  fetchUserAccounts(): void {
    const apiUrl = 'http://localhost:5000/api/user-accounts'; // Update the API URL as per your backend route

    this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
        this.userAccounts = data;
      },
      (error) => {
        console.error('Error fetching user accounts:', error);
      }
    );
  }


  constructor(
    private http: HttpClient, 
    public dialog: MatDialog
  ) {
    this.fetchTempUsers();
    this.fetchUserAccounts();
   }

onUserDelete(User:any):void {
  const dialogRef = this.dialog.open(MessageComponent);
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.http.get<any[]>(`http://localhost:5000/api/delete-useracc/${User.email}`).subscribe({
        next: (data) => {
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
  
  onApprove(tempUser: any): void {
    this.http.get<any[]>(`http://localhost:5000/api/approve-tempacc/${tempUser.email}`).subscribe({
      next: (data) => {
        console.log('User approved and moved to user account collection successfully');
        this.fetchTempUsers(); // Refresh the user list after approval
      },
      error: (error) => {
        console.error('Error approving user:', error);
      }
    });
  }

onUserEdit(user:any) :void {
  const dialogRef = this.dialog.open(EdituserComponent);
}


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




  tempUsers: any[] = []; // Initialize as an empty array

  displayedColumns: string[] = [
    'index',
    'company',
    'contact',
    'email',
    'address',
    'city',
    'userRole',
    'actions'
  ];
  showTable: boolean = false;

  activTable: boolean = true;

  ngOnInit(): void {
    this.fetchTempUsers();
    this.fetchUserAccounts();
  }
  toggleTable(): void {
    this.showTable = !this.showTable; // Toggle table visibility
    if (this.showTable) {
      this.activTable=false;
      // Fetch temp users data here if needed when the table is shown
      this.fetchTempUsers();
    } else {
      this.activTable=true;
    }
  }

  fetchTempUsers(): void {
    this.http.get<any[]>('http://localhost:5000/api/getalltempuser').subscribe({
      next: (data) => {
        this.tempUsers = data;
      },
      error: (error) => {
        console.error('Error fetching temp users:', error);
      }
    });
  }
}
