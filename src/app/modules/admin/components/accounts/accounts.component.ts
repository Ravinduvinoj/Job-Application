import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageComponent } from './message/message.component';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent implements OnInit {
  constructor(private http: HttpClient, public dialog: MatDialog) { }
  onApprove(_t68: any) {

  }
  onDelete(tempUser: any): void {
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
    'company',
    'contact',
    'email',
    'userRole',
    'actions'
  ];
  showTable: boolean = false;

  

  ngOnInit(): void {
    this.fetchTempUsers();
  }
  toggleTable(): void {
    this.showTable = !this.showTable; // Toggle table visibility
    if (this.showTable) {
      // Fetch temp users data here if needed when the table is shown
      this.fetchTempUsers();
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
