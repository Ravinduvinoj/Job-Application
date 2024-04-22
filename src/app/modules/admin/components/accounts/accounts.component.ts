import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent implements OnInit {
  onApprove(_t68: any) {

  }
  onDelete(_t68: any) {

  }
  tempUsers: any[] = []; // Initialize as an empty array

  displayedColumns: string[] = [
    'company',
    'contact',
    'email',
    'userRole',
    'actions'
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchTempUsers();
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
